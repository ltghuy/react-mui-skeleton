import { ColorPath } from '@models/core/utility/types';

/**
 * Checks if a given color is a path color.
 * @param color - The color to be checked, which can be a direct color value or a ColorPath.
 * @returns `true` if the color is a ColorPath (contains a dot '.'), `false` otherwise.
 * @template T - The type of the color, which can be a direct color value or a ColorPath.
 */
export const checkIsPathColor = <T>(
  color: T | ColorPath
): color is ColorPath => {
  /**
   * Implementation Details:
   * - Checks if the type of the color is a string and if it contains a dot ('.').
   * - Assumes that a ColorPath is represented as a string with a dot ('.') separator.
   */

  return typeof color === 'string' && color.includes('.');
};
