# Type manipulation utilities for TypeScript

TypeScript Type Manipulation Utils is a collection of powerful and reusable type manipulation utilities for TypeScript developers. It aims to simplify and streamline the process of working with complex types, making it easier to create, validate, and transform type definitions in your TypeScript projects.

## Features

### Success & Error Handling Type: `boolean-payload`

This type definition is designed to facilitate error handling by allowing you to associate a payload with a boolean value, `isTruthy`. When `isTruthy` is `true`, the payload represents a successful result, whereas when `isTruthy` is `false`, the payload represents an error or an exceptional case. This can be particularly useful when working with API fetches or exception handling.

The `BooleanPayload` type offers several advantages:

1. **Type safety**: By explicitly defining the types for both success and error payloads, it becomes harder to accidentally mix them up or misuse them in your code. This can help prevent bugs and make your code more maintainable.

2. **Readability**: The `BooleanPayload` type makes it clear that the payload is associated with a boolean value and that it represents either a successful result or an error. This can make your code easier to understand for both yourself and other developers.

3. **Flexibility**: By using generics, you can easily customize the types of the payloads for both success and error cases. This allows you to use the `BooleanPayload` type in a wide variety of scenarios, making it a versatile tool for error handling.

In summary, the `BooleanPayload` type is a convenient and efficient way to handle success and error cases in your TypeScript code, particularly when working with API fetches or exception handling. It promotes type safety, readability, and flexibility, making your code more robust and easier to maintain.

### Create Object keys type from String Arrays: `keys-object`

The KeysObject type is intended for use with the Type Guard function, and provides a convenient way to ensure that a given key exists within an object while keeping the implementation simple and focused on the existence of the key. This approach improves the type safety and readability of TypeScript code without performing complex value type checking.

### Create Union type from Object keys: `object-keys-union`

The `ObjectKeysUnion` type provides a convenient way to extract the keys of an object type and generate a union type from them. This approach enhances type safety, readability, and maintainability when working with functions that require specific object keys as their arguments.

By using `ObjectKeysUnion`, you can:

1. **Improve type safety**: Restrict function arguments to the valid keys of an object type, preventing the use of invalid keys and reducing the risk of bugs in your code.

2. **Increase readability**: Make it clear which keys are expected as arguments, helping both yourself and other developers to better understand the code.

3. **Boost maintainability**: Automatically update the generated union type when new keys are added to the source object type, making it easier to maintain your codebase over time.

In summary, the `ObjectKeysUnion` type offers a convenient way to work with specific object keys in your TypeScript code, improving type safety, readability, and maintainability.
