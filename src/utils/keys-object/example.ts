import { KeysObject } from 'src/utils/keys-object';

const hasKeysObject = <ObjType extends readonly string[]>(
  obj: unknown,
  expectKeys: ObjType
): obj is KeysObject<ObjType> => {
  if (typeof obj !== 'object' || obj === null || obj === undefined) {
    return false;
  }

  for (const key in expectKeys) {
    if (!(key in obj)) {
      return false;
    }
  }

  return true;
};

const fetchUnknownAPI = () => {
  return {
    foo: 1,
    bar: undefined,
    baz: 'abc',
  } as unknown;
};

// usage example
const data = fetchUnknownAPI();
const keys = ['foo', 'bar', 'baz'] as const;

if (hasKeysObject(data, keys)) {
  /**
   * data = {
   *   foo: unknown;
   *   bar: unknown;
   *   baz: unknown;
   * }
   */
  console.log(data);
} else {
  // unknown
  console.log(data);
}
