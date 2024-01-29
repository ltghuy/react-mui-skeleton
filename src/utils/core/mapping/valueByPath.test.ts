import { getValueByPath, setValueByPath } from './valueByPath';

describe('getValueByPath', () => {
  const obj = {
    foo: {
      bar: {
        baz: 42,
      },
    },
  };

  it('Should return the value at the given path', () => {
    expect(getValueByPath(obj, 'foo.bar.baz')).toBe(42);
  });

  it('Should return undefined for an invalid path', () => {
    /* eslint-disable */
    expect(getValueByPath(obj, 'foo.bar.qux' as any)).toBe(undefined);
  });

  it('Should return undefined for a path that leads to a non-object value', () => {
    /* eslint-disable */
    expect(getValueByPath(obj, 'foo.bar.baz.qux' as any)).toBe(undefined);
  });
});

describe('setValueByPath', () => {
  it('Sets the value at the specified path in the object', () => {
    // Define the input object
    let obj = {
      bar: {
        name: 'A',
      },
    };

    // Call the setValueByPath function
    obj = setValueByPath(obj, 'bar.name', 'B');

    // Define the expected output
    const expected = {
      bar: {
        name: 'B',
      },
    };

    // Compare the actual result with the expected output
    expect(obj).toEqual(expected);
  });
});
