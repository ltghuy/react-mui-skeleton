import { checkIsPathColor } from '@utils/core/color/checkIsPathColor';

describe('checkIsPathColor', () => {
  it('Should return true for ColorPath', () => {
    const color: string = 'palette.primary'; // Example ColorPath
    const result = checkIsPathColor(color);

    expect(result).toBe(true);
  });

  it('Should return false for direct color value', () => {
    const color: string = 'red'; // Example direct color value
    const result = checkIsPathColor(color);

    expect(result).toBe(false);
  });

  it('Should return false for non-string values', () => {
    const color: number = 42; // Example non-string value
    const result = checkIsPathColor(color);

    expect(result).toBe(false);
  });

  it('Should return false for ColorPath without dot', () => {
    const color: string = 'palette'; // Example ColorPath without dot
    const result = checkIsPathColor(color);

    expect(result).toBe(false);
  });
});
