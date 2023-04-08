import { createAsyncThunk } from '@reduxjs/toolkit';
const { fetchContacts, addContact, deleteContactById } = require('service/Api');

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchContacts();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    console.log(newContact);
    try {
      return await addContact(newContact);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      return await deleteContactById(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
