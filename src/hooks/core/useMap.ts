import { useCallback, useState } from 'react';

/**
 * Represents either a Map or an array of key-value pairs.
 * @template K - The type of keys in the map.
 * @template V - The type of values in the map.
 */
export type MapOrEntries<K, V> = Map<K, V> | [K, V][];

/**
 * Defines the available actions for manipulating the map.
 * @template K - The type of keys in the map.
 * @template V - The type of values in the map.
 */
export interface MapActions<K, V> {
  /**
   * Sets a key-value pair in the map.
   * @param key - The key to set.
   * @param value - The value to set for the key.
   */
  set: (key: K, value: V) => void;

  /**
   * Sets multiple key-value pairs in the map.
   * @param entries - A Map or an array of key-value pairs to set in the map.
   */
  setAll: (entries: MapOrEntries<K, V>) => void;

  /**
   * Removes a key-value pair from the map.
   * @param key - The key to remove.
   */
  remove: (key: K) => void;

  /**
   * Resets the map by clearing all key-value pairs.
   */
  reset: Map<K, V>['clear'];
}

/**
 * Represents the return type of the `useMap` hook.
 * @template K - The type of keys in the map.
 * @template V - The type of values in the map.
 */
type Return<K, V> = [
  Omit<Map<K, V>, 'set' | 'clear' | 'delete'>,
  MapActions<K, V>
];

/**
 * A custom React hook for managing a Map state with convenient actions.
 * @param initialState - The initial state of the map, either a Map or an array of key-value pairs.
 * @returns A tuple containing the map state and actions for manipulating the map.
 */
export function useMap<K, V>(
  initialState: MapOrEntries<K, V> = new Map()
): Return<K, V> {
  const [map, setMap] = useState(new Map(initialState));

  /**
   * Actions for manipulating the map state.
   * @type {MapActions<K, V>}
   */
  const actions: MapActions<K, V> = {
    /**
     * Sets a key-value pair in the map.
     * @param key - The key to set.
     * @param value - The value to set for the key.
     */
    set: useCallback((key, value) => {
      setMap(prev => {
        const copy = new Map(prev);
        copy.set(key, value);
        return copy;
      });
    }, []),

    /**
     * Sets multiple key-value pairs in the map.
     * @param entries - A Map or an array of key-value pairs to set in the map.
     */
    setAll: useCallback(entries => {
      setMap(() => new Map(entries));
    }, []),

    /**
     * Removes a key-value pair from the map.
     * @param key - The key to remove.
     */
    remove: useCallback(key => {
      setMap(prev => {
        const copy = new Map(prev);
        copy.delete(key);
        return copy;
      });
    }, []),

    /**
     * Resets the map by clearing all key-value pairs.
     */
    reset: useCallback(() => {
      setMap(() => new Map());
    }, []),
  };

  return [map, actions];
}
