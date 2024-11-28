// Action Types
export const SET_SEED_PHRASE = 'SET_SEED_PHRASE';
export const SET_BIRTHDAY = 'SET_BIRTHDAY';

// Define Action Types
export type SecretsAction =
  | { type: typeof SET_SEED_PHRASE; seedPhrase: string }
  | { type: typeof SET_BIRTHDAY; birthday: number };

// Action Creators
export const setSeedPhrase = (seedPhrase: string): SecretsAction => ({
  type: SET_SEED_PHRASE,
  seedPhrase,
});

export const setBirthday = (birthday: number): SecretsAction => ({
  type: SET_BIRTHDAY,
  birthday,
});
