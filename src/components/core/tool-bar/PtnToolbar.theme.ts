import { Components, Theme } from '@mui/material';

export const muiToolbarTheme = ({
  breakpoints,
}: Theme): Pick<Components<Omit<Theme, 'components'>>, 'MuiToolbar'> => ({
  MuiToolbar: {
    styleOverrides: {
      root: {
        justifyContent: 'space-between',
        minHeight: '50px',
        boxShadow: 'none',
        [breakpoints.up('sm')]: {
          minHeight: '60px !important',
        },
      },
    },
  },
});
