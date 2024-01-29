import { STORES_KEY } from '@constants/storesKey';
import { combineReducers } from '@reduxjs/toolkit';
import { settingsReducer } from '@stores/settings';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({
  settings: settingsReducer,
});

export const persistedReducer = persistReducer(
  {
    key: STORES_KEY.ROOT,
    blacklist: Object.values(STORES_KEY),
    storage,
  },
  rootReducer
);
