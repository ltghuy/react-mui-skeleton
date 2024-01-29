import { STORES_KEY } from '@constants/storesKey';
import { StoreState } from '@models/core/store/types';
import { THEME_MODES } from '@models/core/theme/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getInitState } from '@utils/core/store/initState';
import { getStateReconciler } from '@utils/core/store/stateReconciler';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface SettingsStore {
  menu: {
    expanded: boolean;
  };
  themeMode: THEME_MODES;
}

const initialState = getInitState<SettingsStore>({
  menu: {
    expanded: true,
  },
  themeMode: 'auto',
});

const userSettingsSlice = createSlice({
  initialState,
  name: STORES_KEY.SETTINGS,
  reducers: {
    updateMenuExpanded: (state, action: PayloadAction<boolean>) => {
      state.current.menu.expanded = action.payload;
    },
    updateThemeMode: (state, action: PayloadAction<THEME_MODES>) => {
      state.current.themeMode = action.payload;
    },
  },
});

export const { updateMenuExpanded, updateThemeMode } =
  userSettingsSlice.actions;

const persistConfig: PersistConfig<StoreState<SettingsStore>> = {
  storage,
  key: STORES_KEY.SETTINGS,
  stateReconciler: getStateReconciler,
};

export const settingsReducer = persistReducer<StoreState<SettingsStore>>(
  persistConfig,
  userSettingsSlice.reducer
);
