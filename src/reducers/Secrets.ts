import {
  SET_SEED_PHRASE,
  SET_BIRTHDAY,
} from '@actions/Secrets';

/**
 * The structure of the SecretsState.
 */
export interface SecretsState {
  seedPhrase: string;
  birthday: number;
}

// Define the initial state
const initialSecrets: SecretsState = {
  seedPhrase: '',
  birthday: 0,
};

// Define the structure of an action
export interface SecretsAction {
  type: string;
  birthday?: number; // Optional, used for SET_BIRTHDAY
  seedPhrase?: string; // Optional, used for SET_SEED_PHRASE
}

// Reducer function
export const SecretsReducer = (
  state: SecretsState = initialSecrets,
  action: SecretsAction
): SecretsState => {
  switch (action.type) {
    case SET_BIRTHDAY:
      return {
        ...state,
        birthday: action.birthday ?? state.birthday, // Use provided or fallback to current
      };

    case SET_SEED_PHRASE:
      return {
        ...state,
        seedPhrase: action.seedPhrase ?? state.seedPhrase, // Use provided or fallback to current
      };

    default:
      return state;
  }
};

export default SecretsReducer;
