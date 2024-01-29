/**
 * Converts a hexadecimal color code to an RGBA color with the specified opacity.
 *
 * @param hexCode - The hexadecimal color code, with or without the "#" symbol. Ex: #f0f0f0
 * @param opacity - The opacity value for the RGBA color (0 to 1). Ex: 0.5
 * @returns The RGBA color representation as a string in the format "rgba(red, green, blue, opacity)".
 * @throws {Error} If the provided hexCode is not a valid hexadecimal color code.
 *
 * @example
 * const hexColor = '#3498db'; // Blue color in hex
 * const opacity = 0.5; // 50% opacity
 *
 * const rgbaColor = hexToRGBA(hexColor, opacity);
 * console.log(rgbaColor); // Output: "rgba(52, 152, 219, 0.5)"
 */

export const hexToRGBA = (hexCode: string, opacity: number): string => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
