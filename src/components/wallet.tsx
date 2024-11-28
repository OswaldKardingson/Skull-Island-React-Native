import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Props Interface
interface WalletProps {
  theme: {
    width: number;
    height: number;
  };
  qrScanning?: boolean;
  title: string;
  passphrase: string;
  heightValue: string;
  onPassphraseChange: (value: string) => void;
  onHeightChange: (value: string) => void;
  onNewWalletPress: () => void;
  onRecoverWalletPress: () => void;
  testID?: string;
}

const Wallet: React.FC<WalletProps> = ({
  theme,
  qrScanning = false,
  title,
  passphrase,
  heightValue,
  onPassphraseChange,
  onHeightChange,
  onNewWalletPress,
  onRecoverWalletPress,
  testID = 'wallet-container',
}) => {
  const { width, height } = theme;

  return (
    <View
      style={[
        styles.container,
        { width, height, display: qrScanning ? 'flex' : 'none' },
      ]}
      testID={testID}
    >
      {/* Header with Gradient */}
      <View testID={`${testID}-header`}>
        <LinearGradient
          colors={['rgba(187,150,69,1)', 'rgba(0,0,0,1)']}
          style={[styles.headerFade, { height: height * 0.2, width }]}
          testID={`${testID}-gradient`}
        />
        <Text
          style={[
            styles.title,
            {
              bottom: height * 0.025,
              height: width * (1.5 / 21),
              fontSize: width * (1.5 / 21),
            },
          ]}
          testID={`${testID}-title`}
        >
          {title}
        </Text>
      </View>

      {/* Scrollable Section */}
      <ScrollView
        style={[
          styles.scrollSection,
          { height: height * 0.8, width },
        ]}
        testID={`${testID}-scroll-view`}
      >
        {/* Passphrase Section */}
        <View style={styles.passphraseSection} testID={`${testID}-passphrase-section`}>
          <Text
            style={[
              styles.sectionTitle,
              {
                fontSize: width * (1.5 / 36),
                width: width * 0.8,
                top: height * 0.01,
                left: width * 0.1,
              },
            ]}
            testID={`${testID}-passphrase-title`}
          >
            Passphrase
          </Text>
          <View
            style={[
              styles.passphraseArea,
              {
                width: width * 0.9,
                height: width * (1.5 / 24) * 6.25,
                left: width * 0.05,
              },
            ]}
            testID={`${testID}-passphrase-area`}
          >
            <TextInput
              style={[
                styles.input,
                {
                  fontSize: width * (1.5 / 36),
                  width: width * 0.9,
                  height: width * (1.5 / 24) * 6.25,
                },
              ]}
              value={passphrase}
              onChangeText={onPassphraseChange}
              placeholder="Enter your passphrase"
              placeholderTextColor="#737373"
              multiline
              testID={`${testID}-passphrase-input`}
            />
          </View>
        </View>

        {/* Height Section */}
        <View style={styles.heightSection} testID={`${testID}-height-section`}>
          <Text
            style={[
              styles.sectionTitle,
              {
                fontSize: width * (1.5 / 36),
                top:
                  height * 0.06 +
                  width * (1.5 / 24) * 6.25,
                left: width * 0.15,
                width: width * 0.8,
              },
            ]}
            testID={`${testID}-height-title`}
          >
            Blockchain Height
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                width: width * 0.4,
                height: width * (1.5 / 24),
                left: width * 0.55,
              },
            ]}
            value={heightValue}
            onChangeText={onHeightChange}
            placeholder="Enter height"
            placeholderTextColor="#737373"
            keyboardType="numeric"
            testID={`${testID}-height-input`}
          />
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.buttonContainer} testID={`${testID}-button-container`}>
        <TouchableOpacity
          style={[
            styles.newButton,
            {
              width: width * 0.9,
              height: height * 0.075,
              left: width * 0.05,
              bottom: height * 0.15,
              borderRadius: height * 0.075 / 2,
            },
          ]}
          onPress={onNewWalletPress}
          testID={`${testID}-new-wallet`}
        >
          <Text style={styles.buttonText}>Create New Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.recoverButton,
            {
              width: width * 0.9,
              height: height * 0.075,
              left: width * 0.05,
              bottom: height * 0.05,
              borderRadius: height * 0.075 / 2,
            },
          ]}
          onPress={onRecoverWalletPress}
          testID={`${testID}-recover-wallet`}
        >
          <Text style={styles.buttonText}>Recover Wallet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    textAlign: 'center',
  },
  headerFade: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    position: 'absolute',
    left: 0,
    color: '#bb9645',
    fontFamily: 'Bai Jamjuree',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollSection: {
    position: 'absolute',
    top: '20%',
    left: 0,
  },
  passphraseSection: {
    position: 'relative',
    marginTop: 20,
  },
  sectionTitle: {
    color: '#bb9645',
    fontWeight: 'bold',
    fontFamily: 'Bai Jamjuree',
  },
  passphraseArea: {
    backgroundColor: 'rgba(187,150,69,0.1)',
  },
  input: {
    color: '#ffffff',
    backgroundColor: 'rgba(0,0,0,0)',
    borderBottomWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#bb9645',
    textAlign: 'center',
  },
  heightSection: {
    position: 'relative',
    marginTop: 40,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  newButton: {
    position: 'absolute',
    backgroundColor: 'rgba(187,150,69,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recoverButton: {
    position: 'absolute',
    backgroundColor: 'rgba(48,49,51,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Wallet;
