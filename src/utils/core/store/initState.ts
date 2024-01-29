import { StoreState } from '@models/core/store/types';

/**
 * Creates an initial state object for a store by initializing it with the given value.
 *
 * This function takes a value of type `T` and creates an initial state object of type `StoreState<T>`.
 * The `init` and `current` properties of the state object are set to the provided value.
 *
 * @param state - The initial value to set for the state.
 * @returns An initial state object with `init` and `current` properties set to the specified value.
 * @typeParam T - The type of the initial state value.
 *
 * @example
 * const state = {
 *    foo: 'bar',
 *    count: 0,
 * };
 * const result = getInitState(state);
 * console.log(result);
 * // => {
 *  init: {
 *    foo: 'bar',
 *    count: 0,
 *  },
 *  current: {
 *    foo: 'bar',
 *    count: 0,
 *  },
 * }
 */
export const getInitState = <T>(state: T): StoreState<T> => {
  return {
    init: state,
    current: state,
  };
};
