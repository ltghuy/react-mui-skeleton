import { muiAppBarTheme } from '@components/core/app-bar/PtnAppBar.theme';
import { muiButtonTheme } from '@components/core/button/PtnButton.theme';
import { muiIconButtonTheme } from '@components/core/icon-button/PtnIconButton.theme';
import { muiPaperTheme } from '@components/core/paper/PtnPaper.theme';
import { muiToolbarTheme } from '@components/core/tool-bar/PtnToolbar.theme';
import { muiTypographyTheme } from '@components/core/typography/PtnTypography.theme';
import { Components, Theme } from '@mui/material';

export const getThemeComponents = (
  theme: Theme
): Components<Omit<Theme, 'components'>> => ({
  ...muiButtonTheme(),
  ...muiPaperTheme(),
  ...muiTypographyTheme(),
  ...muiIconButtonTheme(),
  ...muiAppBarTheme(theme),
  ...muiToolbarTheme(theme),
});
