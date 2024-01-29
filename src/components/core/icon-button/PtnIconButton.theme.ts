import { Components, Theme } from '@mui/material';

export const muiIconButtonTheme = (): Pick<
  Components<Omit<Theme, 'components'>>,
  'MuiIconButton'
> => ({
  MuiIconButton: {
    styleOverrides: {},
  },
});
