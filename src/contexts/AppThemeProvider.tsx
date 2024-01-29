import { getGlobalStyles } from '@assets/styles/globalStyles';
import { darkTheme } from '@assets/themes/dark';
import { lightTheme } from '@assets/themes/light';
import { ThemeSettings } from '@models/core/theme/entities';
import { THEME_NAMES } from '@models/core/theme/types';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { Theme, ThemeProvider } from '@mui/material/styles';
import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const THEME_MAPPING: Record<THEME_NAMES, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};

export interface AppThemeProviderProps extends Partial<ThemeProviderProps> {
  settings?: Partial<ThemeSettings>;
}

export const AppThemeProvider = ({
  children,
  settings,
  ...props
}: AppThemeProviderProps) => {
  const theme = THEME_MAPPING[settings?.themeName ?? 'light'];
  return (
    <ThemeProvider {...props} theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => getGlobalStyles(theme, settings)} />
      {children}
    </ThemeProvider>
  );
};
