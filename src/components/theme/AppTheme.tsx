import { ReactNode, useMemo } from 'react';
import { AppThemeProvider } from '@contexts/AppThemeProvider';
import { useColorScheme } from '@hooks/core/useColorScheme';
import { useThemeMode } from '@hooks/core/useThemeMode';
import { THEME_NAMES } from '@models/core/theme/types';

export interface AppThemeProps {
  children: ReactNode;
}

export const AppTheme = ({ children }: AppThemeProps) => {
  const { themeMode } = useThemeMode();
  const { colorScheme } = useColorScheme();

  const themeName = useMemo<THEME_NAMES>(() => {
    if (themeMode === 'auto') {
      return colorScheme as THEME_NAMES;
    }
    return themeMode;
  }, [colorScheme, themeMode]);

  return (
    <AppThemeProvider settings={{ themeName, isCustomScrollbar: true }}>
      {children}
    </AppThemeProvider>
  );
};
