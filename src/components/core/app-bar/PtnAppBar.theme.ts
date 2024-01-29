import { Components, Theme } from '@mui/material';

export const muiAppBarTheme = ({
  palette,
}: Theme): Pick<Components<Omit<Theme, 'components'>>, 'MuiAppBar'> => ({
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: palette.primary.main,
      },
    },
    defaultProps: {
      elevation: 0,
    },
  },
});
