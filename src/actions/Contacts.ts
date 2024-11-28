import { CONTACT } from '../types'; // Ensure CONTACT is defined in ../types or define locally

export const SET_CONTACTS = 'SET_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

// Action Types
interface SetContactsAction {
  type: typeof SET_CONTACTS;
  contacts: CONTACT[] | null;
}

interface AddContactAction {
  type: typeof ADD_CONTACT;
  contact: CONTACT;
}

interface DeleteContactAction {
  type: typeof DELETE_CONTACT;
  contact: CONTACT;
}

// Union Type for Actions
export type ContactActions = SetContactsAction | AddContactAction | DeleteContactAction;

// Action Creators
export function setContacts(contacts: CONTACT[] | null): SetContactsAction {
  return {
    type: SET_CONTACTS,
    contacts,
  };
}

export function addContact(contact: CONTACT): AddContactAction {
  return {
    type: ADD_CONTACT,
    contact,
  };
}

export function deleteContact(contact: CONTACT): DeleteContactAction {
  return {
    type: DELETE_CONTACT,
    contact,
  };
}
