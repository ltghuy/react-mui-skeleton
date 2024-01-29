import { THEME_NAMES } from '@models/core/theme/types';

/**
 * Interface representing theme settings for the application.
 */
export interface ThemeSettings {
  /**
   * The name of the theme to be applied.
   */
  themeName: THEME_NAMES;

  /**
   * A boolean indicating whether custom scrollbar styles should be applied.
   */
  isCustomScrollbar: boolean;
}
