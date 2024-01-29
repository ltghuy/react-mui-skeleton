import { THEME_MODES } from '@models/core/theme/types';
import { useAppDispatch, useAppSelector } from '@stores/index';
import { updateThemeMode } from '@stores/settings';

/**
 * Custom hook to manage the application's theme mode using Redux.
 * @returns An object containing the current theme mode and a function to update it.
 * @example
 * // Usage
 * const { themeMode, setThemeMode } = useThemeMode();
 */
export const useThemeMode = () => {
  const { themeMode } = useAppSelector(state => state.settings.current);
  const dispatch = useAppDispatch();

  /**
   * Function to update the theme mode in the Redux store.
   * @param themeMode - The new theme mode to set.
   */
  const setThemeMode = (themeMode: THEME_MODES) => {
    dispatch(updateThemeMode(themeMode));
  };

  return { themeMode, setThemeMode };
};
