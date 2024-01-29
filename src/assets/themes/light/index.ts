import { createTheme, ThemeOptions } from '@mui/material';

import { getThemeComponents } from '../core/components';
import { shape } from '../core/shape';
import { typography } from '../core/typography';

import { palette } from './palette';

const initialTheme = createTheme({
  palette,
  typography,
  shape,
});

export const lightTheme = createTheme(initialTheme as ThemeOptions, {
  components: getThemeComponents(initialTheme),
});
