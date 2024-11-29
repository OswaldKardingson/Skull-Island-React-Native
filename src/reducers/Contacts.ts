import { SET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, ContactActions } from '@actions/Contacts';
import { CONTACT } from '../types';

// Define the shape of the state
interface ContactsState {
  contacts: CONTACT[] | null;
}

// Initial State
const initialState: ContactsState = {
  contacts: null,
};

// Reducer
export const ContactsReducer = (
  state = initialState,
  action: ContactActions
): ContactsState => {
  switch (action.type) {
    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.contacts,
      };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: state.contacts ? [...state.contacts, action.contact] : [action.contact],
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts
          ? state.contacts.filter(
              (existingContact) => existingContact.id !== action.contact.id
            )
          : null,
      };

    default:
      return state;
  }
};
