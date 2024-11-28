// Action Types
export const SET_SEND_TO_ADDRESS = 'SET_SEND_TO_ADDRESS';
export const SET_SEND_TO_AMOUNT = 'SET_SEND_TO_AMOUNT';
export const SET_SEND_TO_FIAT = 'SET_SEND_TO_FIAT';
export const SET_SEND_TO_MEMO = 'SET_SEND_TO_MEMO';

// Define Action Types
export type SendToAction =
  | { type: typeof SET_SEND_TO_ADDRESS; address: string }
  | { type: typeof SET_SEND_TO_AMOUNT; amount: number }
  | { type: typeof SET_SEND_TO_FIAT; fiat: number }
  | { type: typeof SET_SEND_TO_MEMO; memo: string };

// Action Creators
export const setSendToAddress = (address: string): SendToAction => ({
  type: SET_SEND_TO_ADDRESS,
  address,
});

export const setSendToAmount = (amount: number): SendToAction => ({
  type: SET_SEND_TO_AMOUNT,
  amount,
});

export const setSendToFiat = (fiat: number): SendToAction => ({
  type: SET_SEND_TO_FIAT,
  fiat,
});

export const setSendToMemo = (memo: string): SendToAction => ({
  type: SET_SEND_TO_MEMO,
  memo,
});
