// Action Types
export const SET_SUB_PAGE_MAIN = 'SET_CURRENT_SUB_PAGE_MAIN';
export const SET_SUB_PAGE_SEND = 'SET_CURRENT_SUB_PAGE_SEND';
export const SET_SUB_PAGE_RECEIVE = 'SET_CURRENT_SUB_PAGE_RECEIVE';
export const SET_SUB_PAGE_PRIVATE_KEY = 'SET_CURRENT_SUB_PAGE_PRIVATE_KEY';
export const SET_SUB_PAGE_PASSPHRASE = 'SET_CURRENT_SUB_PAGE_PASSPHRASE';
export const SET_SUB_PAGE_REINDEX = 'SET_CURRENT_SUB_PAGE_REINDEX';
export const SET_SUB_PAGE_TRANSACTION_SCROLL = 'SET_CURRENT_SUB_PAGE_TRANSACTION_SCROLL';
export const SET_SUB_PAGE_TRANSACTION_SCROLL_POS = 'SET_CURRENT_SUB_PAGE_TRANSACTION_SCROLL_POS';
export const SET_SUB_PAGE_ADDRESSLIST = 'SET_CURRENT_SUB_PAGE_ADDRESSLIST';
export const SET_SUB_PAGE_TRANSACTION = 'SET_CURRENT_SUB_PAGE_TRANSACTION';
export const SET_SUB_PAGE_RECONNECT = 'SET_CURRENT_SUB_PAGE_RECONNECT';

// Define Action Types
export type MainSubPageAction =
  | { type: typeof SET_SUB_PAGE_MAIN; mainPage: string }
  | { type: typeof SET_SUB_PAGE_SEND; sendPage: string }
  | { type: typeof SET_SUB_PAGE_RECEIVE; receivePage: string }
  | { type: typeof SET_SUB_PAGE_PRIVATE_KEY; privateKeyPage: string }
  | { type: typeof SET_SUB_PAGE_PASSPHRASE; passPhrasePage: string }
  | { type: typeof SET_SUB_PAGE_REINDEX; reindexPage: string }
  | { type: typeof SET_SUB_PAGE_TRANSACTION_SCROLL; transactionScroll: boolean }
  | { type: typeof SET_SUB_PAGE_TRANSACTION_SCROLL_POS; transactionScrollPos: number }
  | { type: typeof SET_SUB_PAGE_ADDRESSLIST; addressList: string[] }
  | { type: typeof SET_SUB_PAGE_TRANSACTION; transactionPage: string }
  | { type: typeof SET_SUB_PAGE_RECONNECT; reconnectPage: string };

// Action Creators
export const setMainPage = (mainPage: string): MainSubPageAction => ({
  type: SET_SUB_PAGE_MAIN,
  mainPage,
});

export const setSendPage = (sendPage: string): MainSubPageAction => ({
  type: SET_SUB_PAGE_SEND,
  sendPage,
});

export const setReceivePage = (receivePage: string): MainSubPageAction => ({
  type: SET_SUB_PAGE_RECEIVE,
  receivePage,
});

export const setPrivateKeyPage = (privateKeyPage: string): MainSubPageAction => ({
  type: SET_SUB_PAGE_PRIVATE_KEY,
  privateKeyPage,
});

export const setPassPhrasePage = (passPhrasePage: string): MainSubPageAction => ({
  type: SET_SUB_PAGE_PASSPHRASE,
  passPhrasePage,
});

export const setReindexPage = (reindexPage: string): MainSubPageAction => ({
  type: SET_SUB_PAGE_REINDEX,
  reindexPage,
});

export const setTransactionScroll = (transactionScroll: boolean): MainSubPageAction => ({
  type: SET_SUB_PAGE_TRANSACTION_SCROLL,
  transactionScroll,
});

export const setTransactionScrollPos = (transactionScrollPos: number): MainSubPageAction => ({
  type: SET_SUB_PAGE_TRANSACTION_SCROLL_POS,
  transactionScrollPos,
});

export const setAddressList = (addressList: string[]): MainSubPageAction => ({
  type: SET_SUB_PAGE_ADDRESSLIST,
  addressList,
});

export const setTransactionPage = (transactionPage: string): MainSubPageAction => ({
  type: SET_SUB_PAGE_TRANSACTION,
  transactionPage,
});

export const setReconnectPage = (reconnectPage: string): MainSubPageAction => ({
  type: SET_SUB_PAGE_RECONNECT,
  reconnectPage,
});
