import { Palette } from '@mui/material';

/**
 * Represents a type that generates a flattened path from an object structure.
 * @template T - The object structure to generate a flattened path from.
 * @template Prefix - The prefix to be added to the path, typically a string or number.
 */
export type ObjPath<T, Prefix extends string | number = ''> = T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? Prefix extends ''
          ? ObjPath<T[K], `${K}`> | `${K}`
          :
              | ObjPath<T[K], `${Prefix}.${Extract<K, string | number>}`>
              | `${Prefix}.${K}`
        : never;
    }[keyof T]
  : Prefix;

/**
 * Represents a color path, which is a string-based path to a color within a palette.
 * The string is expected to be in a format that allows resolving the color from a Palette.
 * @template T - The type of the Palette.
 */
export type ColorPath<T = Palette> = ObjPath<T>;
