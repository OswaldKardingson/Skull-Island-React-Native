type LiteWalletCallback = (successResponse: any) => void;

declare const LiteWallet: {
  [key: string]: (...args: any[]) => void;
};

/**
 * Wraps a LiteWallet method call with a Promise for better async handling.
 * @param methodName The name of the LiteWallet method to call.
 * @param args The arguments to pass to the LiteWallet method.
 * @returns A Promise resolving to the success response or rejecting with the error response.
 */
export function wrapLiteWalletMethod<T>(methodName: string, ...args: any[]): Promise<T> {
  return new Promise((resolve, reject) => {
    LiteWallet[methodName](
      ...args,
      (successResponse: T) => resolve(successResponse),
      (errorResponse: any) => reject(errorResponse)
    );
  });
}

// Exported functions using wrapLiteWalletMethod
export const checkServer = (arg: string) => wrapLiteWalletMethod<boolean>('checkserver', [arg]);
export const walletExists = (args: any) => wrapLiteWalletMethod<boolean>('exists', args);
export const initializeWallet = (url: string) => wrapLiteWalletMethod<void>('initialize', url);
export const newWallet = (url: string) => wrapLiteWalletMethod<void>('newWallet', url);
export const restoreWallet = (seed: string) => wrapLiteWalletMethod<void>('restoreWallet', seed);
export const sync = () => wrapLiteWalletMethod<void>('sync');
export const syncStatus = () => wrapLiteWalletMethod<string>('syncStatus');
export const syncStop = () => wrapLiteWalletMethod<void>('syncStop');
export const rescan = () => wrapLiteWalletMethod<void>('rescan');
export const clear = () => wrapLiteWalletMethod<void>('clear');
export const info = () => wrapLiteWalletMethod<object>('info');
export const encryptionStatus = () => wrapLiteWalletMethod<boolean>('encryptionstatus');
export const balance = () => wrapLiteWalletMethod<number>('balance');
export const notes = () => wrapLiteWalletMethod<any[]>('notes');
export const privateKey = (address: string) => wrapLiteWalletMethod<string>('privateKey', address);
export const newZAddress = () => wrapLiteWalletMethod<string>('newZAddress');
export const newTAddress = () => wrapLiteWalletMethod<string>('newTAddress');
export const walletSeed = () => wrapLiteWalletMethod<string>('seed');
export const height = () => wrapLiteWalletMethod<number>('height');
export const list = () => wrapLiteWalletMethod<any[]>('list');
export const encryptWallet = (password: string) => wrapLiteWalletMethod<void>('encrypt', password);
export const decryptWallet = (password: string) => wrapLiteWalletMethod<void>('decrypt', password);
export const decryptOldWallet = (password: string) =>
  wrapLiteWalletMethod<void>('decryptOldWallet', password);
export const lock = () => wrapLiteWalletMethod<void>('lock');
export const unlock = (password: string) => wrapLiteWalletMethod<void>('unlock', password);
export const unlockOldWallet = (password: string) =>
  wrapLiteWalletMethod<void>('unlockOldWallet', password);
export const save = (args: any) => wrapLiteWalletMethod<void>('save', args);
export const send = (tx: any) => wrapLiteWalletMethod<string>('send', tx);
export const getSeedPhrase = () => wrapLiteWalletMethod<string>('getSeedPhrase');
export const checkSeedPhrase = (seedPhrase: string) =>
  wrapLiteWalletMethod<boolean>('checkSeedPhrase', seedPhrase);
