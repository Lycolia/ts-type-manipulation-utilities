# Type manipulation utilities for TypeScript

TypeScript Type Manipulation Utils is a collection of powerful and reusable type manipulation utilities for TypeScript developers. It aims to simplify and streamline the process of working with complex types, making it easier to create, validate, and transform type definitions in your TypeScript projects.

## Features

### Success & Error Handling Type

[boolean-payload](https://github.com/Lycolia/ts-type-manipulation-utilities/tree/main/src/utils/boolean-payload)

This type definition is designed to facilitate error handling by allowing you to associate a payload with a boolean value, `isTruthy`. When `isTruthy` is `true`, the payload represents a successful result, whereas when `isTruthy` is `false`, the payload represents an error or an exceptional case. This can be particularly useful when working with API fetches or exception handling.

The `BooleanPayload` type offers several advantages:

1. **Type safety**: By explicitly defining the types for both success and error payloads, it becomes harder to accidentally mix them up or misuse them in your code. This can help prevent bugs and make your code more maintainable.

2. **Readability**: The `BooleanPayload` type makes it clear that the payload is associated with a boolean value and that it represents either a successful result or an error. This can make your code easier to understand for both yourself and other developers.

3. **Flexibility**: By using generics, you can easily customize the types of the payloads for both success and error cases. This allows you to use the `BooleanPayload` type in a wide variety of scenarios, making it a versatile tool for error handling.

In summary, the `BooleanPayload` type is a convenient and efficient way to handle success and error cases in your TypeScript code, particularly when working with API fetches or exception handling. It promotes type safety, readability, and flexibility, making your code more robust and easier to maintain.

Here's a brief example of how to use the `BooleanPayload` type:

```ts
type SuccessfulPayload = {
  code: number;
  body: string;
};

type FailurePayload = {
  code: number;
  message: string;
};

const fetchAPI = (
  param: string
): BooleanPayload<SuccessfulPayload, FailurePayload> => {
  if (param === '1') {
    return {
      isTruthy: true,
      payload: {
        code: 200,
        body: '<html>\n<head>\n<title>Hello World</title>\n</head>\n<body>\n<h1>Hello world</h1>\n</body>\n</html>',
      },
    };
  } else {
    return {
      isTruthy: false,
      payload: {
        code: 503,
        message: 'unexpected error occurred',
      },
    };
  }
};

const resp = fetchAPI('any');

if (resp.isTruthy) {
  console.log(resp.payload);
} else {
  console.error(resp.payload);
}
```

### Create Object keys type from String Arrays

[keys-object](https://github.com/Lycolia/ts-type-manipulation-utilities/tree/main/src/utils/keys-object)

The `KeysObject` type provides a convenient and type-safe way to define object types with a specific set of keys, without requiring explicit type checks for each property's value. This simplifies the implementation, while still ensuring that the object contains the expected keys.

Using the `KeysObject` type, developers can create objects with properties based on a tuple of strings, where each property's value is of type `unknown`. This allows for flexibility in handling the values, while maintaining type safety for the keys.

Here's a brief example of how to use the `KeysObject` type:

```ts
type MyKeys = ["key1", "key2", "key3"] as const;
type MyObject = KeysObject<MyKeys>;

// The resulting MyObject type will be:
// {
//   key1: unknown;
//   key2: unknown;
//   key3: unknown;
// }
```

In combination with a suitable Type Guard function, developers can ensure the presence of the expected keys in an object while keeping the implementation simple and easy to understand.

```ts
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
```

### Create Union type from Object keys

[object-keys-union](https://github.com/Lycolia/ts-type-manipulation-utilities/tree/main/src/utils/object-keys-union)

The `ObjectKeysUnion` type provides a convenient way to extract the keys of an object type and generate a union type from them. This approach enhances type safety, readability, and maintainability when working with functions that require specific object keys as their arguments.

By using `ObjectKeysUnion`, you can:

1. **Improve type safety**: Restrict function arguments to the valid keys of an object type, preventing the use of invalid keys and reducing the risk of bugs in your code.

2. **Increase readability**: Make it clear which keys are expected as arguments, helping both yourself and other developers to better understand the code.

3. **Boost maintainability**: Automatically update the generated union type when new keys are added to the source object type, making it easier to maintain your codebase over time.

In summary, the `ObjectKeysUnion` type offers a convenient way to work with specific object keys in your TypeScript code, improving type safety, readability, and maintainability.

Here's a brief example of how to use the `ObjectKeysUnion` type:

```ts
import { ObjectKeysUnion } from 'src/utils/object-keys-union';

const PaymentMethodContext = {
  visa: {
    type: 'credit-card',
    name: 'VISA',
    logo: 'visa.png',
  },
  master: {
    type: 'credit-card',
    name: 'Mastercard',
    logo: 'master.png',
  },
  amex: {
    type: 'credit-card',
    name: 'American Express',
    logo: 'amex.png',
  },
  diners: {
    type: 'credit-card',
    name: 'Diners card',
    logo: 'diners.png',
  },
  paypal: {
    type: 'PSP',
    name: 'PayPal',
    logo: 'paypal.png',
  },
} as const;

type PaymentMethods = ObjectKeysUnion<typeof PaymentMethodContext>;

// usage example
const getPaymentMethodContext = (pm: PaymentMethods) => {
  return pm in PaymentMethodContext
    ? PaymentMethodContext[pm]
    : new Error(`Invalid payment method: ${pm}`);
};
```
