import {
  SET_SUB_PAGE_MAIN,
  SET_SUB_PAGE_SEND,
  SET_SUB_PAGE_RECEIVE,
  SET_SUB_PAGE_PRIVATE_KEY,
  SET_SUB_PAGE_PASSPHRASE,
  SET_SUB_PAGE_REINDEX,
  SET_SUB_PAGE_TRANSACTION_SCROLL,
  SET_SUB_PAGE_TRANSACTION_SCROLL_POS,
  SET_SUB_PAGE_ADDRESSLIST,
  SET_SUB_PAGE_TRANSACTION,
  SET_SUB_PAGE_RECONNECT,
} from '../actions/MainSubPage';

// Define the state structure
export interface MainSubPageState {
  mainPage: string;
  sendPage: string;
  receivePage: string;
  privateKeyPage: string;
  passPhrasePage: string;
  reindexPage: string;
  transactionScroll: boolean;
  transactionScrollPos: number;
  addressList: string;
  transactionPage: string;
  reconnectPage: string;
}

// Define the initial state
const initialState: MainSubPageState = {
  mainPage: 'visible',
  sendPage: 'none',
  receivePage: 'none',
  privateKeyPage: 'none',
  passPhrasePage: 'none',
  reindexPage: 'none',
  transactionScroll: false,
  transactionScrollPos: 0,
  addressList: 'visible',
  transactionPage: 'none',
  reconnectPage: 'none',
};

// Define the action type interface
interface MainSubPageAction {
  type: string;
  [key: string]: any; // Flexible payload for various actions
}

// Reducer function
export const MainSubPageReducer = (
  state = initialState,
  action: MainSubPageAction
): MainSubPageState => {
  switch (action.type) {
    case SET_SUB_PAGE_MAIN:
      return { ...state, mainPage: action.mainPage };

    case SET_SUB_PAGE_SEND:
      return { ...state, sendPage: action.sendPage };

    case SET_SUB_PAGE_RECEIVE:
      return { ...state, receivePage: action.receivePage };

    case SET_SUB_PAGE_PRIVATE_KEY:
      return { ...state, privateKeyPage: action.privateKeyPage };

    case SET_SUB_PAGE_PASSPHRASE:
      return { ...state, passPhrasePage: action.passPhrasePage };

    case SET_SUB_PAGE_REINDEX:
      return { ...state, reindexPage: action.reindexPage };

    case SET_SUB_PAGE_TRANSACTION_SCROLL:
      return { ...state, transactionScroll: action.transactionScroll };

    case SET_SUB_PAGE_TRANSACTION_SCROLL_POS:
      return { ...state, transactionScrollPos: action.transactionScrollPos };

    case SET_SUB_PAGE_ADDRESSLIST:
      return { ...state, addressList: action.addressList };

    case SET_SUB_PAGE_TRANSACTION:
      return { ...state, transactionPage: action.transactionPage };

    case SET_SUB_PAGE_RECONNECT:
      return { ...state, reconnectPage: action.reconnectPage };

    default:
      return state;
  }
};

export default MainSubPageReducer;
