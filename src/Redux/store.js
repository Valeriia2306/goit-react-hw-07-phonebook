import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from './createSliceContacts';
import { filterSlice } from './createFilterSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
