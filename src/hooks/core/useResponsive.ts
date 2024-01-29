import { useMediaQuery, useTheme } from '@mui/material';

/**
 * Represents the responsiveness of the application.
 */
export interface ResponsiveState {
  /**
   * Indicates whether the application is in a mobile view.
   */
  isMobile: boolean;

  /**
   * Indicates whether the application is in a tablet view.
   */
  isTablet: boolean;

  /**
   * Indicates whether the application is in a desktop view.
   */
  isDesktop: boolean;
}

/**
 * A custom React hook for handling responsiveness based on Material-UI breakpoints.
 * @returns An object containing boolean values representing the responsiveness of the application.
 */
export const useResponsive = (): ResponsiveState => {
  const { breakpoints } = useTheme();

  const isMobile: boolean = useMediaQuery(breakpoints.down('sm'));
  const isDesktop: boolean = useMediaQuery(breakpoints.down('lg'));
  const isTablet: boolean = !isMobile && !isDesktop;

  return { isMobile, isTablet, isDesktop };
};
