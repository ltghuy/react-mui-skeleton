import { useEffect, useState } from 'react';

/**
 * Represents a color scheme, which can be either 'light' or 'dark'.
 */
export type COLOR_SCHEME = 'light' | 'dark';

/**
 * Custom hook to dynamically track the user's preferred color scheme.
 * @returns An object containing the current color scheme.
 * @example
 * // Usage
 * const { colorScheme } = useColorScheme();
 */
export const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<COLOR_SCHEME>('light');

  /**
   * Effect to listen for changes in the user's preferred color scheme and update the state accordingly.
   */
  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        setColorScheme(event.matches ? 'dark' : 'light');
      });

    // Cleanup event listener on component unmount
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', event => {
          setColorScheme(event.matches ? 'dark' : 'light');
        });
    };
  }, []);

  return { colorScheme };
};
