import { getInitState } from '@utils/core/store/initState';

describe('getInitState', () => {
  it('Should returns the correct initial state', () => {
    // Define the input state
    const state = {
      foo: 'bar',
      count: 0,
    };

    // Call the getInitState function
    const result = getInitState(state);

    // Define the expected output
    const expected = {
      init: state,
      current: state,
    };

    // Compare the actual result with the expected output
    expect(result).toEqual(expected);
  });
});
