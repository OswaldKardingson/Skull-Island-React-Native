import {
  SET_HAS_EXISTING_WALLET,
  SET_ACTIVE_PASSWORD,
  SET_ADDRESS,
  SET_PRIVATE_KEY,
  SET_HEIGHT,
  SET_SYNCED_BLOCKS,
  SET_REFRESH_SECONDS_REMAINING,
  SET_SYNCED,
  SET_BALANCE,
  SET_DIMENSIONS_HEIGHT,
  SET_DIMENSIONS_WIDTH,
  SET_DIMENSIONS_TOP,
  SET_DIMENSIONS_BOTTOM,
  SET_IN_BTC_VALUE,
  SET_IN_CURRENCY_VALUE,
  SET_QR_SCANNING,
  SET_SAVING,
  SET_WALLET_INUSE,
  SET_WALLET_LOADED,
  SET_REFRESH_ADDRESS,
  SET_TADDRESSES,
  SET_ZADDRESSES,
  SET_TX,
  SET_TX_LIST,
  SET_VIEWING_TX,
  SET_MENU_READY,
  SET_ADDRESS_SCANNING,
  SET_ACTIVE_SERVER,
  SET_USER_SERVERS,
  SET_PRIMARY_SERVERS,
  SET_BACKUP_SERVERS,
  SET_DISCONNECTED,
} from '../actions/Context';

// Define the state structure
export interface ContextState {
  hasExistingWallet: boolean;
  activePassword: string;
  address: string;
  privateKey: string;
  height: number;
  syncedBlocks: number;
  refreshSecondsRemaining: number;
  synced: boolean;
  balance: number;
  dimensionsHeight: number;
  dimensionsWidth: number;
  dimensionsTop: number;
  dimensionsBottom: number;
  BTCValue: number;
  currencyValue: number;
  qrScanning: boolean;
  addrScanning: boolean;
  saving: boolean;
  walletInUse: boolean;
  walletLoaded: boolean;
  refreshAddresses: boolean;
  zAddresses: string[];
  tAddresses: string[];
  tx: any | null; // Adjust type if you have a specific shape for transactions
  txList: any | null; // Adjust type if you have a specific shape for transaction lists
  viewingTx: boolean;
  menuReady: boolean;
  activeServer: string | null;
  userServers: string[];
  primaryServers: string[];
  backupServers: string[];
  disconnected: boolean;
}

// Initial state
const initialContext: ContextState = {
  hasExistingWallet: false,
  activePassword: '',
  address: '',
  privateKey: '',
  height: 0,
  syncedBlocks: 0,
  refreshSecondsRemaining: 0,
  synced: false,
  balance: 0,
  dimensionsHeight: 0,
  dimensionsWidth: 0,
  dimensionsTop: 0,
  dimensionsBottom: 0,
  BTCValue: 0,
  currencyValue: 0,
  qrScanning: false,
  addrScanning: false,
  saving: false,
  walletInUse: false,
  walletLoaded: false,
  refreshAddresses: false,
  zAddresses: [],
  tAddresses: [],
  tx: null,
  txList: null,
  viewingTx: false,
  menuReady: false,
  activeServer: null,
  userServers: [],
  primaryServers: [],
  backupServers: [],
  disconnected: false,
};

// Define action type structure
export interface ContextAction {
  type: string;
  [key: string]: any; // Allow other properties specific to actions
}

// Reducer
export const ContextReducer = (
  state: ContextState = initialContext,
  action: ContextAction
): ContextState => {
  switch (action.type) {
    case SET_HAS_EXISTING_WALLET:
      return { ...state, hasExistingWallet: action.hasExistingWallet };

    case SET_ACTIVE_PASSWORD:
      return { ...state, activePassword: action.activePassword };

    case SET_ADDRESS:
      return { ...state, address: action.address };

    case SET_PRIVATE_KEY:
      return { ...state, privateKey: action.privateKey };

    case SET_HEIGHT:
      return { ...state, height: action.height };

    case SET_SYNCED_BLOCKS:
      return { ...state, syncedBlocks: action.syncedBlocks };

    case SET_REFRESH_SECONDS_REMAINING:
      return { ...state, refreshSecondsRemaining: action.refreshSecondsRemaining };

    case SET_SYNCED:
      return { ...state, synced: action.synced };

    case SET_BALANCE:
      return { ...state, balance: action.balance };

    case SET_DIMENSIONS_HEIGHT:
      return { ...state, dimensionsHeight: action.dimensionsHeight };

    case SET_DIMENSIONS_WIDTH:
      return { ...state, dimensionsWidth: action.dimensionsWidth };

    case SET_DIMENSIONS_TOP:
      return { ...state, dimensionsTop: action.dimensionsTop };

    case SET_DIMENSIONS_BOTTOM:
      return { ...state, dimensionsBottom: action.dimensionsBottom };

    case SET_IN_BTC_VALUE:
      return { ...state, BTCValue: action.BTCValue };

    case SET_IN_CURRENCY_VALUE:
      return { ...state, currencyValue: action.currencyValue };

    case SET_QR_SCANNING:
      return { ...state, qrScanning: action.qrScanning };

    case SET_ADDRESS_SCANNING:
      return { ...state, addrScanning: action.addrScanning };

    case SET_SAVING:
      return { ...state, saving: action.saving };

    case SET_WALLET_INUSE:
      return { ...state, walletInUse: action.walletInUse };

    case SET_WALLET_LOADED:
      return { ...state, walletLoaded: action.walletLoaded };

    case SET_REFRESH_ADDRESS:
      return { ...state, refreshAddresses: action.refreshAddresses };

    case SET_TADDRESSES:
      return { ...state, tAddresses: action.tAddresses };

    case SET_ZADDRESSES:
      return { ...state, zAddresses: action.zAddresses };

    case SET_TX:
      return { ...state, tx: action.tx };

    case SET_TX_LIST:
      return { ...state, txList: action.txList };

    case SET_VIEWING_TX:
      return { ...state, viewingTx: action.viewingTx };

    case SET_MENU_READY:
      return { ...state, menuReady: action.menuReady };

    case SET_ACTIVE_SERVER:
      return { ...state, activeServer: action.activeServer };

    case SET_USER_SERVERS:
      return { ...state, userServers: action.userServers };

    case SET_PRIMARY_SERVERS:
      return { ...state, primaryServers: action.primaryServers };

    case SET_BACKUP_SERVERS:
      return { ...state, backupServers: action.backupServers };

    case SET_DISCONNECTED:
      return { ...state, disconnected: action.disconnected };

    default:
      return state;
  }
};

export default ContextReducer;
