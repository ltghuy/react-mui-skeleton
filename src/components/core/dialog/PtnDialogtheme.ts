import { Components, Theme } from '@mui/material';

export const muiDialogTheme = (): Pick<
  Components<Omit<Theme, 'components'>>,
  'MuiDialog'
> => ({
  MuiDialog: {
    styleOverrides: {},
  },
});
