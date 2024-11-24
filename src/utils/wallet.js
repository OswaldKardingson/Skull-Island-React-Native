import * as bip39 from 'react-native-bip39'; // For handling mnemonics
import * as bitcoin from 'bitcoinjs-lib'; // For HD wallet and key derivation

/**
 * Generates secret items (addresses and private keys) from a mnemonic phrase.
 * @param {string} phraseStr - The mnemonic phrase (12/24 words).
 * @param {object} coin - Coin configuration (e.g., { networkname: 'bitcoin' }).
 * @returns {Array} Array of objects containing address and privateKey.
 */
export async function phraseToSecretItems(phraseStr, coin) {
  try {
    // Validate the mnemonic
    if (!bip39.validateMnemonic(phraseStr)) {
      throw new Error('Invalid mnemonic phrase');
    }

    // Generate seed from the mnemonic
    const seedBuffer = await bip39.mnemonicToSeed(phraseStr);

    // Set network
    const network = bitcoin.networks[coin.networkname];

    // Derive master node
    const root = bitcoin.bip32.fromSeed(seedBuffer, network);

    // Derive child keys (change `m/44'/0'/0'/0/n` for different derivation paths)
    const secretItems = [];
    for (let index = 0; index < 3; index++) {
      const child = root.derivePath(`m/44'/0'/0'/0/${index}`); // BIP44 standard

      // Get address from the derived public key
      const { address } = bitcoin.payments.p2pkh({
        pubkey: child.publicKey,
        network,
      });

      // Store address and private key
      secretItems.push({
        address,
        privateKey: child.toWIF(),
      });
    }

    return secretItems;
  } catch (error) {
    throw new Error(`Error deriving keys: ${error.message}`);
  }
}

export default { phraseToSecretItems };
