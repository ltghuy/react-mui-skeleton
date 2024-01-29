import { ObjPath } from '@models/core/utility/types';

/**
 * Retrieves a value from an object by providing a path, using dot notation.
 *
 * @template T - The type of the input object.
 *
 * @param obj - The source object from which to retrieve the value.
 * @param path - A string representing the path to the desired value, using dot notation.
 *
 * @returns The value located at the specified path in the object, or `undefined` if the path does not exist.
 *
 * @example
 *  let obj = {
 *    bar: {
 *      name: 'Kelvin',
 *    },
 *  };
 *  console.log(getValueByPath(obj, 'bar.name'));
 * // => Kelvin
 */
export const getValueByPath = <T extends object>(obj: T, path: ObjPath<T>) => {
  const parts = (path as string).split('.');
  /* eslint-disable */
  let result = obj as any;

  for (const part of parts) {
    if (typeof result !== 'object' || result === null) {
      return undefined;
    }
    result = result[part];
  }
  return result;
};

/**
 * Sets a value in an object by providing a path, using dot notation.
 *
 * @template T - The type of the input object.
 *
 * @param obj - The source object in which to set the value.
 * @param path - A string representing the path to the desired location, using dot notation.
 * @param value - The value to be set at the specified path.
 *
 * @returns A new object with the updated value, leaving the original object unchanged.
 *
 * @example
 * let obj = {
 *   bar: {
 *     name: 'Kelvin',
 *   },
 * };
 * obj = setValueByPath(obj, 'bar.name', 'David');
 * console.log(obj.bar.name);
 * // => David
 */
export const setValueByPath = <T extends object>(
  obj: T,
  path: ObjPath<T>,
  /* eslint-disable */
  value: any
): T => {
  const parts = (path as string).split('.');
  const result = { ...obj };
  /* eslint-disable */
  let current: any = result;

  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];

    if (typeof current[part] !== 'object' || current[part] === null) {
      current[part] = {};
    }

    current = current[part];
  }

  const lastPart = parts[parts.length - 1];
  current[lastPart] = value;

  return result;
};
