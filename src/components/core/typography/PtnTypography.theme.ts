import { Components, Theme } from '@mui/material';

export const muiTypographyTheme = (): Pick<
  Components<Omit<Theme, 'components'>>,
  'MuiTypography'
> => ({
  MuiTypography: {
    styleOverrides: {},
    defaultProps: {
      variant: 'body1',
    },
  },
});
