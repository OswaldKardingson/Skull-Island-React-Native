// Action Types
export const SET_HAS_EXISTING_WALLET = 'SET_CURRENT_HAS_EXISTING_WALLET';
export const SET_ACTIVE_PASSWORD = 'SET_CURRENT_ACTIVE_PASSWORD';
export const SET_ADDRESS = 'SET_CURRENT_ADDRESS';
export const SET_PRIVATE_KEY = 'SET_CURRENT_PRIVATE_KEY';
export const SET_HEIGHT = 'SET_CURRENT_HEIGHT';
export const SET_SYNCED_BLOCKS = 'SET_CURRENT_SYNCED_BLOCKS';
export const SET_REFRESH_SECONDS_REMAINING = 'SET_CURRENT_REFRESH_SECONDS_REMAINING';
export const SET_SYNCED = 'SET_CURRENT_SYNCED';
export const SET_BALANCE = 'SET_CURRENT_BALANCE';
export const SET_DIMENSIONS_HEIGHT = 'SET_CURRENT_DIMENSIONS_HEIGHT';
export const SET_DIMENSIONS_WIDTH = 'SET_CURRENT_DIMENSIONS_WIDTH';
export const SET_DIMENSIONS_TOP = 'SET_CURRENT_DIMENSIONS_TOP';
export const SET_DIMENSIONS_BOTTOM = 'SET_CURRENT_DIMENSIONS_BOTTOM';
export const SET_IN_BTC_VALUE = 'SET_IN_BTC_VALUE';
export const SET_IN_CURRENCY_VALUE = 'SET_IN_CURRENCY_VALUE';
export const SET_QR_SCANNING = 'SET_QR_SCANNING';
export const SET_SAVING = 'SET_CURRENT_SAVING';
export const SET_WALLET_INUSE = 'SET_CURRENT_WALLET_INUSE';
export const SET_WALLET_LOADED = 'SET_CURRENT_WALLET_LOADED';
export const SET_REFRESH_ADDRESS = 'SET_CURRENT_REFRESH_ADDRESS';
export const SET_TADDRESSES = 'SET_CURRENT_TADDRESSES';
export const SET_ZADDRESSES = 'SET_CURRENT_ZADDRESSES';
export const SET_TX = 'SET_CURRENT_TX';
export const SET_TX_LIST = 'SET_CURRENT_TX_LIST';
export const SET_VIEWING_TX = 'SET_CURRENT_VIEWING_TX';
export const SET_MENU_READY = 'SET_CURRENT_MENU_READY';
export const SET_ADDRESS_SCANNING = 'SET_CURRENT_ADDRESS_SCANNING';
export const SET_ACTIVE_SERVER = 'SET_CURRENT_ACTIVE_SERVER';
export const SET_USER_SERVERS = 'SET_CURRENT_USER_SERVERS';
export const SET_PRIMARY_SERVERS = 'SET_CURRENT_PRIMARY_SERVERS';
export const SET_BACKUP_SERVERS = 'SET_CURRENT_BACKUP_SERVERS';
export const SET_DISCONNECTED = 'SET_CURRENT_DISCONNECTED';

// Define Action Types
export type ContextAction =
  | { type: typeof SET_HAS_EXISTING_WALLET; hasExistingWallet: boolean }
  | { type: typeof SET_ACTIVE_PASSWORD; activePassword: string }
  | { type: typeof SET_ADDRESS; address: string }
  | { type: typeof SET_PRIVATE_KEY; privateKey: string }
  | { type: typeof SET_HEIGHT; height: number }
  | { type: typeof SET_SYNCED_BLOCKS; syncedBlocks: number }
  | { type: typeof SET_REFRESH_SECONDS_REMAINING; refreshSecondsRemaining: number }
  | { type: typeof SET_SYNCED; synced: boolean }
  | { type: typeof SET_BALANCE; balance: number }
  | { type: typeof SET_DIMENSIONS_HEIGHT; dimensionsHeight: number }
  | { type: typeof SET_DIMENSIONS_WIDTH; dimensionsWidth: number }
  | { type: typeof SET_DIMENSIONS_TOP; dimensionsTop: number }
  | { type: typeof SET_DIMENSIONS_BOTTOM; dimensionsBottom: number }
  | { type: typeof SET_IN_BTC_VALUE; BTCValue: number }
  | { type: typeof SET_IN_CURRENCY_VALUE; currencyValue: number }
  | { type: typeof SET_QR_SCANNING; qrScanning: boolean }
  | { type: typeof SET_SAVING; saving: boolean }
  | { type: typeof SET_WALLET_INUSE; walletInUse: boolean }
  | { type: typeof SET_WALLET_LOADED; walletLoaded: boolean }
  | { type: typeof SET_REFRESH_ADDRESS; refreshAddresses: string[] }
  | { type: typeof SET_TADDRESSES; tAddresses: string[] }
  | { type: typeof SET_ZADDRESSES; zAddresses: string[] }
  | { type: typeof SET_TX; tx: Record<string, any> }
  | { type: typeof SET_TX_LIST; txList: Record<string, any>[] }
  | { type: typeof SET_VIEWING_TX; viewingTx: Record<string, any> }
  | { type: typeof SET_MENU_READY; menuReady: boolean }
  | { type: typeof SET_ADDRESS_SCANNING; addrScanning: boolean }
  | { type: typeof SET_ACTIVE_SERVER; activeServer: string }
  | { type: typeof SET_USER_SERVERS; userServers: string[] }
  | { type: typeof SET_PRIMARY_SERVERS; primaryServers: string[] }
  | { type: typeof SET_BACKUP_SERVERS; backupServers: string[] }
  | { type: typeof SET_DISCONNECTED; disconnected: boolean };

// Action Creators
export const setHasExistingWallet = (hasExistingWallet: boolean): ContextAction => ({
  type: SET_HAS_EXISTING_WALLET,
  hasExistingWallet,
});

export const setActivePassword = (activePassword: string): ContextAction => ({
  type: SET_ACTIVE_PASSWORD,
  activePassword,
});

export const setAddress = (address: string): ContextAction => ({
  type: SET_ADDRESS,
  address,
});

export const setPrivateKey = (privateKey: string): ContextAction => ({
  type: SET_PRIVATE_KEY,
  privateKey,
});

export const setRefreshSecondsRemaining = (refreshSecondsRemaining: number): ContextAction => ({
  type: SET_REFRESH_SECONDS_REMAINING,
  refreshSecondsRemaining,
});

export const setSyncedBlocks = (syncedBlocks: number): ContextAction => ({
  type: SET_SYNCED_BLOCKS,
  syncedBlocks,
});

export const setHeight = (height: number): ContextAction => ({
  type: SET_HEIGHT,
  height,
});

export const setSynced = (synced: boolean): ContextAction => ({
  type: SET_SYNCED,
  synced,
});

export const setBalance = (balance: number): ContextAction => ({
  type: SET_BALANCE,
  balance,
});

export const setDimensionsHeight = (dimensionsHeight: number): ContextAction => ({
  type: SET_DIMENSIONS_HEIGHT,
  dimensionsHeight,
});

export const setDimensionsWidth = (dimensionsWidth: number): ContextAction => ({
  type: SET_DIMENSIONS_WIDTH,
  dimensionsWidth,
});

export const setDimensionsTop = (dimensionsTop: number): ContextAction => ({
  type: SET_DIMENSIONS_TOP,
  dimensionsTop,
});

export const setDimensionsBottom = (dimensionsBottom: number): ContextAction => ({
  type: SET_DIMENSIONS_BOTTOM,
  dimensionsBottom,
});

export const setZerInBtcValue = (BTCValue: number): ContextAction => ({
  type: SET_IN_BTC_VALUE,
  BTCValue,
});

export const setZerInCurrencyValue = (currencyValue: number): ContextAction => ({
  type: SET_IN_CURRENCY_VALUE,
  currencyValue,
});

export const setQrScanning = (qrScanning: boolean): ContextAction => ({
  type: SET_QR_SCANNING,
  qrScanning,
});

export const setAddressScanning = (addrScanning: boolean): ContextAction => ({
  type: SET_ADDRESS_SCANNING,
  addrScanning,
});

export const setSaving = (saving: boolean): ContextAction => ({
  type: SET_SAVING,
  saving,
});

export const setWalletInUse = (walletInUse: boolean): ContextAction => ({
  type: SET_WALLET_INUSE,
  walletInUse,
});

export const setWalletLoaded = (walletLoaded: boolean): ContextAction => ({
  type: SET_WALLET_LOADED,
  walletLoaded,
});

export const setRefreshAddresses = (refreshAddresses: string[]): ContextAction => ({
  type: SET_REFRESH_ADDRESS,
  refreshAddresses,
});

export const setTAddresses = (tAddresses: string[]): ContextAction => ({
  type: SET_TADDRESSES,
  tAddresses,
});

export const setZAddresses = (zAddresses: string[]): ContextAction => ({
  type: SET_ZADDRESSES,
  zAddresses,
});

export const setTx = (tx: Record<string, any>): ContextAction => ({
  type: SET_TX,
  tx,
});

export const setTxList = (txList: Record<string, any>[]): ContextAction => ({
  type: SET_TX_LIST,
  txList,
});

export const setViewingTx = (viewingTx: Record<string, any>): ContextAction => ({
  type: SET_VIEWING_TX,
  viewingTx,
});

export const setMenuReady = (menuReady: boolean): ContextAction => ({
  type: SET_MENU_READY,
  menuReady,
});

export const setActiveServer = (activeServer: string): ContextAction => ({
  type: SET_ACTIVE_SERVER,
  activeServer,
});

export const setUserServers = (userServers: string[]): ContextAction => ({
  type: SET_USER_SERVERS,
  userServers,
});

export const setPrimaryServers = (primaryServers: string[]): ContextAction => ({
  type: SET_PRIMARY_SERVERS,
  primaryServers,
});

export const setBackupServers = (backupServers: string[]): ContextAction => ({
  type: SET_BACKUP_SERVERS,
  backupServers,
});

export const setDisconnected = (disconnected: boolean): ContextAction => ({
  type: SET_DISCONNECTED,
  disconnected,
});


