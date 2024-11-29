import * as bip39 from 'react-native-bip39'; // For handling mnemonics
import * as bitcoin from 'bitcoinjs-lib'; // For HD wallet and key derivation
import * as bip32 from 'bip32'; // For BIP32 operations

// Interface for coin configuration
export interface CoinConfig {
  networkname: string; // Network name (e.g., 'bitcoin')
}

// Interface for secret items (address and private key)
export interface SecretItem {
  address: string;
  privateKey: string;
}

// Props for the phraseToSecretItems function
export interface PhraseToSecretItemsProps {
  phraseStr: string; // The mnemonic phrase (12/24 words)
  coin: CoinConfig; // Coin configuration
}

/**
 * Generates secret items (addresses and private keys) from a mnemonic phrase.
 * @param {PhraseToSecretItemsProps} props - The mnemonic phrase and coin configuration.
 * @returns {Promise<SecretItem[]>} Array of objects containing address and privateKey.
 */
export async function phraseToSecretItems({
  phraseStr,
  coin,
}: PhraseToSecretItemsProps): Promise<SecretItem[]> {
  try {
    // Validate the mnemonic
    if (!bip39.validateMnemonic(phraseStr)) {
      throw new Error('Invalid mnemonic phrase');
    }

    // Generate seed from the mnemonic
    const seedBuffer = await bip39.mnemonicToSeed(phraseStr);

    // Validate and fetch the network
    const networks = bitcoin.networks as { [key: string]: bitcoin.networks.Network };
    const network = networks[coin.networkname];
    if (!network) {
      throw new Error(`Unsupported network: ${coin.networkname}`);
    }

    // Derive master node using bip32
    const root = bip32.fromSeed(seedBuffer, network);

    // Derive child keys (change `m/44'/0'/0'/0/n` for different derivation paths)
    const secretItems: SecretItem[] = [];
    for (let index = 0; index < 3; index++) {
      const child = root.derivePath(`m/44'/0'/0'/0/${index}`); // BIP44 standard

      // Get address from the derived public key
      const { address } = bitcoin.payments.p2pkh({
        pubkey: child.publicKey,
        network,
      });

      if (!address) {
        throw new Error('Failed to generate address');
      }

      // Store address and private key
      secretItems.push({
        address,
        privateKey: child.toWIF(),
      });
    }

    return secretItems;
  } catch (error) {
    console.error('Error deriving keys:', error);
    throw new Error(`Error deriving keys: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export default { phraseToSecretItems };
