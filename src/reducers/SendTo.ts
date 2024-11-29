import {
  SET_SEND_TO_ADDRESS,
  SET_SEND_TO_AMOUNT,
  SET_SEND_TO_FIAT,
  SET_SEND_TO_MEMO,
} from '@actions/SendTo';

// Define the state structure
export interface SendToState {
  address: string;
  amount: number;
  fiat: number;
  memo: string;
}

// Define the initial state
const initialContext: SendToState = {
  address: '',
  amount: 0,
  fiat: 0,
  memo: '',
};

// Define the action interface
export interface SendToAction {
  type: string;
  address?: string;
  amount?: number;
  fiat?: number;
  memo?: string;
}

// Reducer function
export const SendToReducer = (
  state: SendToState = initialContext,
  action: SendToAction
): SendToState => {
  switch (action.type) {
    case SET_SEND_TO_ADDRESS:
      return { ...state, address: action.address ?? state.address };

    case SET_SEND_TO_AMOUNT:
      return { ...state, amount: action.amount ?? state.amount };

    case SET_SEND_TO_FIAT:
      return { ...state, fiat: action.fiat ?? state.fiat };

    case SET_SEND_TO_MEMO:
      return { ...state, memo: action.memo ?? state.memo };

    default:
      return state;
  }
};

export default SendToReducer;
