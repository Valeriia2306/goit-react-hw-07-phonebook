import { createSelector } from '@reduxjs/toolkit';
import filterOfContactsArray from '../service/filterOfContactsArray';

export const selectFilter = state => state.filter;
export const selectContacts = state => state.contacts.items;

export const filteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => filterOfContactsArray(contacts, filter)
);
