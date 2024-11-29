import { combineReducers } from 'redux';

// Import reducers and their state interfaces
import { SecretsReducer, SecretsState } from '@reducers/Secrets';
import { SettingsReducer, SettingsState } from '@reducers/Settings';
import { ContextReducer, ContextState } from '@reducers/Context';
import { ContactsReducer, ContactsState } from '@reducers/Contacts';
import { MainSubPageReducer, MainSubPageState } from '@reducers/MainSubPage';
import { SendToReducer, SendToState } from '@reducers/SendTo';

// Define the root state interface
export interface RootState {
  secrets: SecretsState;
  settings: SettingsState;
  context: ContextState;
  contacts: ContactsState;
  mainSubPage: MainSubPageState;
  sendTo: SendToState;
}

// Combine all reducers into a single root reducer
const allReducers = combineReducers<RootState>({
  secrets: SecretsReducer,
  settings: SettingsReducer,
  context: ContextReducer,
  contacts: ContactsReducer,
  mainSubPage: MainSubPageReducer,
  sendTo: SendToReducer,
});

export default allReducers;
