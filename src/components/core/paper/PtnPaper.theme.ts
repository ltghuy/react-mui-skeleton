import { Components, Theme } from '@mui/material';

export const muiPaperTheme = (): Pick<
  Components<Omit<Theme, 'components'>>,
  'MuiPaper'
> => ({
  MuiPaper: {
    styleOverrides: {},
  },
});
