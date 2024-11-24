export function wrapLiteWalletMethod(methodName, ...args) {
  return new Promise((resolve, reject) => {
    LiteWallet[methodName](...args, (successResponse) => {
      resolve(successResponse);
    }, (errorResponse) => {
      reject(errorResponse);
    });
  });
}

export const checkServer = (arg) => wrapLiteWalletMethod('checkserver', [arg]);
export const walletExists = (args) => wrapLiteWalletMethod('exists', args);
export const initalizeWallet = (url) => wrapLiteWalletMethod('initalize', url);
export const newWallet = (url) => wrapLiteWalletMethod('newWallet', url);
export const restoreWallet = (seed) => wrapLiteWalletMethod('restoreWallet', seed);
export const sync = () => wrapLiteWalletMethod('sync');
export const syncStatus = () => wrapLiteWalletMethod('syncStatus');
export const syncStop = () => wrapLiteWalletMethod('syncStop');
export const rescan = () => wrapLiteWalletMethod('rescan');
export const clear = () => wrapLiteWalletMethod('clear');
export const info = () => wrapLiteWalletMethod('info');
export const encryptionstatus = () => wrapLiteWalletMethod('encryptionstatus');
export const balance = () => wrapLiteWalletMethod('balance');
export const notes = () => wrapLiteWalletMethod('notes');
export const privateKey = (address) => wrapLiteWalletMethod('privateKey', address);
export const newZAddress = () => wrapLiteWalletMethod('newZAddress');
export const newTAddress = () => wrapLiteWalletMethod('newTAddress');
export const walletSeed = () => wrapLiteWalletMethod('seed');
export const height = () => wrapLiteWalletMethod('height');
export const list = () => wrapLiteWalletMethod('list');
export const encryptWallet = (password) => wrapLiteWalletMethod('encrypt', password);
export const decryptWallet = (password) => wrapLiteWalletMethod('decrypt', password);
export const decryptOldWallet = (password) => wrapLiteWalletMethod('decryptOldWallet', password);
export const lock = () => wrapLiteWalletMethod('lock');
export const unlock = (password) => wrapLiteWalletMethod('unlock', password);
export const unlockOldWallet = (password) => wrapLiteWalletMethod('unlockOldWallet', password);
export const save = (args) => wrapLiteWalletMethod('save', args);
export const send = (tx) => wrapLiteWalletMethod('send', tx);
export const getSeedPhrase = () => wrapLiteWalletMethod('getSeedPhrase');
export const checkSeedPhrase = (seedPhrase) => wrapLiteWalletMethod('checkSeedPhrase', seedPhrase);
