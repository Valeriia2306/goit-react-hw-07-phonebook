import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsSlice } from './createSliceContacts';
import { filterSlice } from './createFilterSlice';

const rootPersistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['contacts'],
  version: 1,
};

export const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
