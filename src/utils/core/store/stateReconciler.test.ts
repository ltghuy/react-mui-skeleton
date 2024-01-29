import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import { getStateReconciler } from './stateReconciler';

describe('getStateReconciler', () => {
  it('Should returns the correct state based on reconciliation logic', () => {
    // Define the input parameters
    const inboundState = {
      init: { foo: 'bar' },
      current: { foo: 'bar' },
    };
    const state = { init: { foo: 'bar' }, current: { foo: 'bar' } };
    const reducedState = { init: { foo: 'bar' }, current: { foo: 'bar' } };
    const config = { key: 'root', storage };

    // Call the getStateReconciler function
    const result = getStateReconciler(
      inboundState,
      state,
      reducedState,
      config
    );

    // Define the expected output using the autoMergeLevel2 function
    const expected = autoMergeLevel2(inboundState, state, reducedState, config);

    // Compare the actual result with the expected output
    expect(result).toEqual(expected);
  });
  it('Should returns the correct new inital state', () => {
    // Define the input parameters
    const inboundState = {
      init: { foo: 'bar' },
      current: { foo: 'bar' },
    };
    const state = { init: { foo: 'newData' }, current: { foo: 'bar' } };
    const reducedState = { init: { foo: 'bar' }, current: { foo: 'bar' } };
    const config = { key: 'root', storage };

    // Call the getStateReconciler function
    const result = getStateReconciler(
      inboundState,
      state,
      reducedState,
      config
    );

    expect(result).toEqual(state);
  });
  it('Should returns the correct state with blacklist', () => {
    // Define the input parameters
    const inboundState = {
      init: { foo: 'bar' },
      current: { foo: 'A' },
    };
    const state = { init: { foo: 'bar' }, current: { foo: 'bar' } };
    const reducedState = { init: { foo: 'bar' }, current: { foo: 'bar' } };
    const config = {
      storage,
      key: 'root',
      blacklist: ['current.foo', 'init.foo'],
    };

    // Call the getStateReconciler function
    const result = getStateReconciler(
      inboundState,
      state,
      reducedState,
      config
    );

    expect(result).toEqual(state);
  });
});
