import { ThemeSettings } from '@models/core/theme/entities';
import { GlobalStylesProps, Theme } from '@mui/material';

type GlobalStyles = GlobalStylesProps['styles'];
export function getGlobalStyles(
  { palette }: Theme,
  settings?: Partial<ThemeSettings>
): GlobalStyles {
  let mergedStyles: GlobalStyles = {};
  const globalLayout: GlobalStyles = {
    'html, body, #root': {
      height: '100%',
      width: '100%',
      display: 'flex',
    },
  };
  const scrollbar = {
    '::-webkit-scrollbar': { width: '12px', height: '12px' },
    '::-webkit-scrollbar-track': {
      background: palette.background.default,
    },
    '::-webkit-scrollbar-thumb': {
      backgroundClip: 'padding-box',
      backgroundColor: palette.divider,
      border: '2px solid transparent',
      borderRadius: '20px',
    },
    '::-webkit-scrollbar-thumb:hover': { backgroundColor: palette.grey[500] },
  };

  mergedStyles = {
    ...globalLayout,
  };
  if (settings?.isCustomScrollbar) {
    mergedStyles = { ...mergedStyles, ...scrollbar };
  }

  return mergedStyles;
}
