import { phraseToSecretItems, CoinConfig, SecretItem } from '@utils/wallet';
import * as bip39 from 'react-native-bip39';
import * as bitcoin from 'bitcoinjs-lib';
import * as bip32 from 'bip32';

jest.mock('react-native-bip39', () => ({
  validateMnemonic: jest.fn(),
  mnemonicToSeed: jest.fn(),
}));

jest.mock('bitcoinjs-lib', () => ({
  networks: {
    bitcoin: { bech32: 'bc' },
  },
  payments: {
    p2pkh: jest.fn(),
  },
}));

jest.mock('bip32', () => ({
  fromSeed: jest.fn(),
}));

describe('phraseToSecretItems', () => {
  const mockMnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';
  const mockSeedBuffer = Buffer.from('mockseed', 'utf-8');
  const mockCoin: CoinConfig = {
    networkname: 'bitcoin',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should generate secret items for a valid mnemonic', async () => {
    // Mocking `bip39` methods
    (bip39.validateMnemonic as jest.Mock).mockReturnValue(true);
    (bip39.mnemonicToSeed as jest.Mock).mockResolvedValue(mockSeedBuffer);

    // Mocking `bitcoin` network
    const mockNetwork = bitcoin.networks.bitcoin;

    // Mocking `bip32` methods
    const mockRoot = {
      derivePath: jest.fn().mockImplementation(() => ({
        publicKey: Buffer.from('mockpublickey', 'utf-8'),
        toWIF: jest.fn().mockReturnValue('mockprivatekey'),
      })),
    };
    (bip32.fromSeed as jest.Mock).mockReturnValue(mockRoot);

    // Mocking `bitcoinjs-lib` payments
    (bitcoin.payments.p2pkh as jest.Mock).mockReturnValue({
      address: 'mockaddress',
    });

    const secretItems = await phraseToSecretItems({
      phraseStr: mockMnemonic,
      coin: mockCoin,
    });

    expect(bip39.validateMnemonic).toHaveBeenCalledWith(mockMnemonic);
    expect(bip39.mnemonicToSeed).toHaveBeenCalledWith(mockMnemonic);
    expect(bip32.fromSeed).toHaveBeenCalledWith(mockSeedBuffer, mockNetwork);
    expect(mockRoot.derivePath).toHaveBeenCalledTimes(3);
    expect(bitcoin.payments.p2pkh).toHaveBeenCalledTimes(3);

    const expectedSecretItems: SecretItem[] = [
      { address: 'mockaddress', privateKey: 'mockprivatekey' },
      { address: 'mockaddress', privateKey: 'mockprivatekey' },
      { address: 'mockaddress', privateKey: 'mockprivatekey' },
    ];
    expect(secretItems).toEqual(expectedSecretItems);
  });

  it('should throw an error for an invalid mnemonic', async () => {
    (bip39.validateMnemonic as jest.Mock).mockReturnValue(false);

    await expect(
      phraseToSecretItems({ phraseStr: mockMnemonic, coin: mockCoin })
    ).rejects.toThrow('Invalid mnemonic phrase');

    expect(bip39.validateMnemonic).toHaveBeenCalledWith(mockMnemonic);
    expect(bip39.mnemonicToSeed).not.toHaveBeenCalled();
  });

  it('should throw an error for an unsupported network', async () => {
    (bip39.validateMnemonic as jest.Mock).mockReturnValue(true);

    const unsupportedCoin: CoinConfig = { networkname: 'unsupported' };

    await expect(
      phraseToSecretItems({ phraseStr: mockMnemonic, coin: unsupportedCoin })
    ).rejects.toThrow('Unsupported network: unsupported');

    expect(bip39.validateMnemonic).toHaveBeenCalledWith(mockMnemonic);
    expect(bip39.mnemonicToSeed).not.toHaveBeenCalled();
  });

  it('should throw an error if address generation fails', async () => {
    (bip39.validateMnemonic as jest.Mock).mockReturnValue(true);
    (bip39.mnemonicToSeed as jest.Mock).mockResolvedValue(mockSeedBuffer);

    const mockRoot = {
      derivePath: jest.fn().mockImplementation(() => ({
        publicKey: Buffer.from('mockpublickey', 'utf-8'),
        toWIF: jest.fn().mockReturnValue('mockprivatekey'),
      })),
    };
    (bip32.fromSeed as jest.Mock).mockReturnValue(mockRoot);

    (bitcoin.payments.p2pkh as jest.Mock).mockReturnValue({
      address: null,
    });

    await expect(
      phraseToSecretItems({ phraseStr: mockMnemonic, coin: mockCoin })
    ).rejects.toThrow('Failed to generate address');

    expect(bitcoin.payments.p2pkh).toHaveBeenCalled();
  });
});
