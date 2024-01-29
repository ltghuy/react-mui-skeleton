import { hexToRGBA } from './hexToRGBA';

describe('hexToRGBA', () => {
  it('Should convert a 3-digit hex code to rgba format with the given opacity', () => {
    const result = hexToRGBA('#abc', 0.5);
    expect(result).toEqual('rgba(170, 187, 204, 0.5)');
  });

  it('Should convert a 6-digit hex code to rgba format with the given opacity', () => {
    const result = hexToRGBA('#336699', 0.8);
    expect(result).toEqual('rgba(51, 102, 153, 0.8)');
  });

  it('Should convert a 6-digit hex code with uppercase letters to rgba format with the given opacity', () => {
    const result = hexToRGBA('#FFAABB', 0.2);
    expect(result).toEqual('rgba(255, 170, 187, 0.2)');
  });
});
