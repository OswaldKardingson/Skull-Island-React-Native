import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Spinner from 'react-native-spinkit';
import { RootState } from '@store/store'; 
import { coins } from '@utils/coins';
import {
  encrypt,
  saltHashPassword,
  KeySalt,
} from '@utils/hash';
import {
  setSeedPhrase,
  setBirthday,
} from '../actions/Secrets';
import {
  setMinimumBlock,
  setWalletPassPhrase,
} from '../actions/Settings';
import {
  setQrScanning,
  setWalletLoaded,
  setHasExistingWallet,
} from '../actions/Context';
import {
  restoreWallet,
  checkSeedPhrase,
  getSeedPhrase,
} from '@utils/litewallet';

interface SetWalletPageProps {
  onWalletCreated?: () => void; // Callback for when the wallet is successfully created
}

const SetWalletPage: React.FC<SetWalletPageProps> = ({ onWalletCreated }) => {
  const [openSection, setOpenSection] = useState<number>(1);
  const [tempSeedPhrase, setTempSeedPhrase] = useState<string>('');
  const [tempBirthday, setTempBirthday] = useState<number>(0);
  const [tempSeedPhraseInvalid, setTempSeedPhraseInvalid] = useState<boolean>(false);
  const [createWallet, setCreateWallet] = useState<boolean>(false);

  const context = useSelector((state: RootState) => state.context);
  const settings = useSelector((state: RootState) => state.settings);
  const secrets = useSelector((state: RootState) => state.secrets);

  const dispatch = useDispatch();

  useEffect(() => {
    setTempSeedPhrase(secrets.seedPhrase);
    setTempBirthday(secrets.birthday);
  }, [secrets]);

  const handleQRScan = (event: { data: string }) => {
    try {
      const data = JSON.parse(event.data);
      setTempSeedPhrase(data.passphrase);
      setTempBirthday(data.height);
      checkSeed(data.passphrase);
      dispatch(setQrScanning(false));
    } catch (error) {
      Alert.alert('Error', 'Invalid QR Code format.');
    }
  };

  const checkSeed = async (seed: string) => {
    const words = seed.split(' ');
    if (words.length === 24) {
      try {
        const seedCheck = JSON.parse(await checkSeedPhrase(seed));
        setTempSeedPhraseInvalid(seedCheck.checkSeedPhrase !== 'Ok');
        setCreateWallet(seedCheck.checkSeedPhrase === 'Ok');
      } catch {
        setTempSeedPhraseInvalid(true);
        setCreateWallet(false);
      }
    } else {
      setTempSeedPhraseInvalid(true);
      setCreateWallet(false);
    }
  };

  const restoreWalletHandler = async () => {
    const currentCoin = settings.currentCoin;
    const minHeight = coins[currentCoin].branchHeight['sapling'];
    const seedCheck = JSON.parse(await checkSeedPhrase(tempSeedPhrase));

    if (seedCheck.checkSeedPhrase === 'Ok') {
      try {
        const args = [
          context.activeServer,
          tempSeedPhrase,
          Math.max(tempBirthday, minHeight).toString(),
        ];
        const seed = JSON.parse(await restoreWallet(args));

        if (seed.seed) {
          const keyHash = saltHashPassword(context.activePassword, KeySalt);
          const encryptedSeed = encrypt(seed.seed, keyHash);
          dispatch(setWalletPassPhrase(encryptedSeed));
          dispatch(setWalletLoaded(true));
          dispatch(setHasExistingWallet(true));
          dispatch(setSeedPhrase(seed.seed));
          dispatch(setBirthday(seed.birthday));
          if (onWalletCreated) onWalletCreated();
        }
      } catch (err) {
        console.error('Wallet restoration failed', err);
        Alert.alert('Error', 'Failed to restore wallet.');
      }
    } else {
      setTempSeedPhraseInvalid(true);
    }
  };

  const getNewPhrase = async () => {
    try {
      const seed = JSON.parse(await getSeedPhrase());
      setTempSeedPhrase(seed.seedPhrase);
      setTempBirthday(secrets.birthday);
      setTempSeedPhraseInvalid(false);
    } catch {
      Alert.alert('Error', 'Failed to generate new phrase.');
    }
  };

  const renderSection = () => {
    switch (openSection) {
      case 1:
        return (
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setOpenSection(2)}
              testID="new-wallet-button"
            >
              <Text style={styles.buttonText}>New Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setTempSeedPhrase('');
                setTempBirthday(coins[settings.currentCoin].branchHeight.sapling);
                setOpenSection(3);
              }}
              testID="recover-wallet-button"
            >
              <Text style={styles.buttonText}>Recover Wallet</Text>
            </TouchableOpacity>
          </View>
        );

      case 2:
        return (
          <View>
            <Text style={styles.title}>New Passphrase:</Text>
            <TextInput
              style={styles.input}
              value={tempSeedPhrase}
              editable={false}
              testID="new-passphrase-input"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={getNewPhrase}
              testID="generate-new-phrase-button"
            >
              <Text style={styles.buttonText}>New Phrase</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setOpenSection(1)}
              testID="back-button"
            >
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            {createWallet && (
              <TouchableOpacity
                style={styles.button}
                onPress={restoreWalletHandler}
                testID="create-wallet-button"
              >
                <Text style={styles.buttonText}>Create Wallet</Text>
              </TouchableOpacity>
            )}
          </View>
        );

      case 3:
        return (
          <View>
            <Text style={styles.title}>Enter Passphrase:</Text>
            <TextInput
              style={styles.input}
              value={tempSeedPhrase}
              onChangeText={setTempSeedPhrase}
              testID="recover-passphrase-input"
            />
            <Text style={styles.title}>Recovery Height:</Text>
            <TextInput
              style={styles.input}
              value={tempBirthday.toString()}
              keyboardType="numeric"
              onChangeText={(text) => setTempBirthday(parseInt(text) || 0)}
              testID="recovery-height-input"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => setOpenSection(1)}
              testID="back-recover-button"
            >
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          </View>
        );

      case 4:
        return (
          <View style={styles.spinnerContainer} testID="loading-spinner">
            <Text style={styles.title}>Initializing...</Text>
            <Spinner isVisible size={50} type="ThreeBounce" color="#bb9645" />
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {context.qrScanning ? (
        <QRCodeScanner onRead={handleQRScan} testID="qr-code-scanner" />
      ) : (
        renderSection()
      )}
    </ScrollView>
  );
};

export default SetWalletPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  button: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#bb9645',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: { color: '#fff', fontSize: 16 },
  title: { color: '#fff', fontSize: 18, marginBottom: 10 },
  input: {
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginBottom: 15,
  },
  spinnerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
