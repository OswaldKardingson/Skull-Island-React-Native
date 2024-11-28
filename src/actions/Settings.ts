// Currencies
export const CURRENCY_AUD = 'AUD';
export const CURRENCY_BRL = 'BRL';
export const CURRENCY_CAD = 'CAD';
export const CURRENCY_CHF = 'CHF';
export const CURRENCY_CLP = 'CLP';
export const CURRENCY_CNY = 'CNY';
export const CURRENCY_CZK = 'CZK';
export const CURRENCY_DKK = 'DKK';
export const CURRENCY_EUR = 'EUR';
export const CURRENCY_GBP = 'GBP';
export const CURRENCY_HKD = 'HKD';
export const CURRENCY_HUF = 'HUF';
export const CURRENCY_IDR = 'IDR';
export const CURRENCY_ILS = 'ILS';
export const CURRENCY_INR = 'INR';
export const CURRENCY_JPY = 'JPY';
export const CURRENCY_KRW = 'KRW';
export const CURRENCY_MXN = 'MXN';
export const CURRENCY_MYR = 'MYR';
export const CURRENCY_NOK = 'NOK';
export const CURRENCY_NZD = 'NZD';
export const CURRENCY_PHP = 'PHP';
export const CURRENCY_PKR = 'PKR';
export const CURRENCY_PLN = 'PLN';
export const CURRENCY_RUB = 'RUB';
export const CURRENCY_SEK = 'SEK';
export const CURRENCY_SGD = 'SGD';
export const CURRENCY_THB = 'THB';
export const CURRENCY_TRY = 'TRY';
export const CURRENCY_TWD = 'TWD';
export const CURRENCY_USD = 'USD';
export const CURRENCY_ZAR = 'ZAR';
export const CURRENCY_SAR = 'SAR'; // Added Saudi Riyal
export const CURRENCY_AED = 'AED'; // Added UAE Dirham

export const CURRENCIES = [
  CURRENCY_AUD,
  CURRENCY_BRL,
  CURRENCY_CAD,
  CURRENCY_CHF,
  CURRENCY_CLP,
  CURRENCY_CNY,
  CURRENCY_CZK,
  CURRENCY_DKK,
  CURRENCY_EUR,
  CURRENCY_GBP,
  CURRENCY_HKD,
  CURRENCY_HUF,
  CURRENCY_IDR,
  CURRENCY_ILS,
  CURRENCY_INR,
  CURRENCY_JPY,
  CURRENCY_KRW,
  CURRENCY_MXN,
  CURRENCY_MYR,
  CURRENCY_NOK,
  CURRENCY_NZD,
  CURRENCY_PHP,
  CURRENCY_PKR,
  CURRENCY_PLN,
  CURRENCY_RUB,
  CURRENCY_SEK,
  CURRENCY_SGD,
  CURRENCY_THB,
  CURRENCY_TRY,
  CURRENCY_TWD,
  CURRENCY_USD,
  CURRENCY_ZAR,
  CURRENCY_SAR,
  CURRENCY_AED,
];

// Languages
export const LANG_AFRIKAANS = 'Afrikaans';
export const LANG_CHINESE = 'Chinese';
export const LANG_DUTCH = 'Dutch';
export const LANG_ENGLISH = 'English';
export const LANG_FILIPINO = 'Filipino';
export const LANG_FINNISH = 'Finnish';
export const LANG_FRENCH = 'French';
export const LANG_GERMAN = 'German';
export const LANG_INDONESIAN = 'Indonesian';
export const LANG_ITALIAN = 'Italian';
export const LANG_NORWEGIAN = 'Norwegian';
export const LANG_PORTUGUESE = 'Portuguese';
export const LANG_RUSSIAN = 'Russian';
export const LANG_SERBIAN = 'Serbian';
export const LANG_SPANISH = 'Spanish';
export const LANG_SWEDISH = 'Swedish';

export const LANGUAGES = [
  LANG_AFRIKAANS,
  LANG_CHINESE,
  LANG_DUTCH,
  LANG_ENGLISH,
  LANG_FILIPINO,
  LANG_FINNISH,
  LANG_FRENCH,
  LANG_GERMAN,
  LANG_INDONESIAN,
  LANG_ITALIAN,
  LANG_NORWEGIAN,
  LANG_PORTUGUESE,
  LANG_RUSSIAN,
  LANG_SERBIAN,
  LANG_SPANISH,
  LANG_SWEDISH,
];

// Actions
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_INSIGHT_EXPLORER = 'SET_INSIGHT_EXPLORER';
export const SET_WALLET_PASSWORD = 'SET_WALLET_PASSWORD';
export const SET_WALLET_PASSPHRASE = 'SET_WALLET_PASSPHRASE';
export const SET_SAVE_DATA = 'SET_SAVE_DATA';
export const SET_MINIMUM_BLOCK = 'SET_MINIMUM_BLOCK';
export const SET_CURRENT_COIN = 'SET_CURRENT_COIN';
export const SET_NOTE_INPUTS = 'SET_CURRENT_NOTE_INPUTS';
export const SET_PROCESS_TIME = 'SET_CURRENT_PROCESS_TIME';

// Define Action Types
export type SettingsAction =
  | { type: typeof SET_LANGUAGE; language: string }
  | { type: typeof SET_CURRENCY; currency: string }
  | { type: typeof SET_INSIGHT_EXPLORER; explorerURL: string }
  | { type: typeof SET_WALLET_PASSWORD; password: string }
  | { type: typeof SET_WALLET_PASSPHRASE; passPhrase: string }
  | { type: typeof SET_SAVE_DATA; saveData: boolean }
  | { type: typeof SET_MINIMUM_BLOCK; minimumBlock: number }
  | { type: typeof SET_CURRENT_COIN; currentCoin: string };

// Action Creators
export const setWalletPassword = (password: string): SettingsAction => ({
  type: SET_WALLET_PASSWORD,
  password,
});

export const setWalletPassPhrase = (passPhrase: string): SettingsAction => ({
  type: SET_WALLET_PASSPHRASE,
  passPhrase,
});

export const setLanguage = (language: string): SettingsAction => ({
  type: SET_LANGUAGE,
  language,
});

export const setCurrency = (currency: string): SettingsAction => ({
  type: SET_CURRENCY,
  currency,
});

export const setInsightExplorer = (explorerURL: string): SettingsAction => ({
  type: SET_INSIGHT_EXPLORER,
  explorerURL,
});

export const setSaveData = (saveData: boolean): SettingsAction => ({
  type: SET_SAVE_DATA,
  saveData,
});

export const setCurrentCoin = (currentCoin: string): SettingsAction => ({
  type: SET_CURRENT_COIN,
  currentCoin,
});

export const setMinimumBlock = (minimumBlock: number): SettingsAction => ({
  type: SET_MINIMUM_BLOCK,
  minimumBlock,
});
