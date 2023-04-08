import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  addNewContact,
  deleteContact,
} from 'Redux/operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    // Fulfilled
    [fetchAllContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [addNewContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(payload);
    },
    [deleteContact.fulfilled](state, { payload }) {
      const index = state.items.findIndex(contact => contact.id === payload);

      state.isLoading = false;
      state.error = null;
      state.items.splice(index, 1);
    },
    // Pending
    [fetchAllContacts.pending]: handlePending,
    [addNewContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    // Rejected
    [fetchAllContacts.rejected]: handleRejected,
    [addNewContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
  },
});
