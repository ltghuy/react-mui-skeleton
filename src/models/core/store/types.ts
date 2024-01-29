/**
 * Represents a generic store state with an initial value and a current value.
 * @template T - The type of data stored in the state.
 */
export type StoreState<T> = {
  /**
   * The initial value of the store state.
   */
  init: T;

  /**
   * The current value of the store state.
   */
  current: T;
};
