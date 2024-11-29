import {
  LANG_ENGLISH,
  CURRENCY_USD,
  SET_LANGUAGE,
  SET_CURRENCY,
  SET_WALLET_PASSWORD,
  SET_WALLET_PASSPHRASE,
  SET_INSIGHT_EXPLORER,
  SET_SAVE_DATA,
  SET_CURRENT_COIN,
  SET_MINIMUM_BLOCK,
} from '@actions/Settings';

import { coins } from '@utils/coins';

// Define the state structure
export interface SettingsState {
  currentCoin: string;
  explorerURL: string;
  language: string;
  currency: string;
  minimumBlock: {
    [key: string]: number;
  };
  password: string | null;
  passPhrase: string | null;
  saveData: boolean;
}

// Define the initial state
const initialSettings: SettingsState = {
  currentCoin: 'pirate',
  explorerURL: coins['pirate'].explorer[0],
  language: LANG_ENGLISH,
  currency: CURRENCY_USD,
  minimumBlock: {
    pirate: 0,
  },
  password: null,
  passPhrase: null,
  saveData: false,
};

// Define the action interface
export interface SettingsAction {
  type: string;
  password?: string;
  passPhrase?: string;
  currency?: string;
  language?: string;
  explorerURL?: string;
  saveData?: boolean;
  currentCoin?: string;
  minimumBlock?: { [key: string]: number };
}

// Reducer function
export const SettingsReducer = (
  state: SettingsState = initialSettings,
  action: SettingsAction
): SettingsState => {
  switch (action.type) {
    case SET_WALLET_PASSWORD:
      return { ...state, password: action.password ?? state.password };

    case SET_WALLET_PASSPHRASE:
      return { ...state, passPhrase: action.passPhrase ?? state.passPhrase };

    case SET_CURRENCY:
      return { ...state, currency: action.currency ?? state.currency };

    case SET_LANGUAGE:
      return { ...state, language: action.language ?? state.language };

    case SET_INSIGHT_EXPLORER:
      return { ...state, explorerURL: action.explorerURL ?? state.explorerURL };

    case SET_SAVE_DATA:
      return { ...state, saveData: action.saveData ?? state.saveData };

    case SET_CURRENT_COIN:
      return { ...state, currentCoin: action.currentCoin ?? state.currentCoin };

    case SET_MINIMUM_BLOCK:
      return { ...state, minimumBlock: action.minimumBlock ?? state.minimumBlock };

    default:
      return state;
  }
};

export default SettingsReducer;
