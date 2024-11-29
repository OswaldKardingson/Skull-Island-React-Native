declare module 'react-native-bip39' {
    export function validateMnemonic(mnemonic: string): boolean;
    export function mnemonicToSeed(mnemonic: string): Promise<Buffer>;
    export function mnemonicToSeedSync(mnemonic: string): Buffer;
    export function generateMnemonic(strength?: number): string;
  }
  