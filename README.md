# ts-scala-utils [![NPM version](https://img.shields.io/npm/v/ts-scala-utils.svg?style=flat)](https://www.npmjs.com/package/ts-scala-utils) [![NPM monthly downloads](https://img.shields.io/npm/dm/ts-scala-utils.svg?style=flat)](https://npmjs.org/package/ts-scala-utils) [![NPM total downloads](https://img.shields.io/npm/dt/ts-scala-utils.svg?style=flat)](https://npmjs.org/package/ts-scala-utils)

A TypeScript library that provides Scala-like Option, Some, and None utilities, helping you manage optional values safely and efficiently.

## Features

_Option Type:_ Provides a type-safe way to handle optional values.
Some and None: Distinguishes between the presence (Some) and absence (None) of a value.

_Utility Methods:_ Includes a variety of methods to manipulate and query Option instances, such as map, getOrElse, isDefined, fold, forEach, and more.
Functional Programming: Encourages a functional programming style in TypeScript.

## Installation

To use this library in your project, install it via npm:

```js
npm i @ts-scala-utils
```

## Usage

Here’s how you can use the library in your TypeScript projects:

Importing the Library

```js
import { Option } from "my-typescript-library";
```

# Basic Example

```js
const someValue = Option.some(42);
const noneValue = Option.none<number>();

console.log(someValue.isDefined()); // true
console.log(noneValue.isDefined()); // false

console.log(someValue.get()); // 42
console.log(someValue.getOrElse(0)); // 42

console.log(noneValue.getOrElse(0)); // 0
```

# Advanced Usage

Map Function

```js
const mappedOption = someValue.map(x => x \* 2);
console.log(mappedOption.get()); // 84
```

# Fold Function

```js
const result = noneValue.fold(
  () => "Empty",
  (value) => `Value: ${value}`
);
console.log(result); // "Empty"
```

# Chain Options

```js
const option1 = Option.some(10);
const option2 = Option.none<number>();

const combined = option1.orElse(option2);
console.log(combined.get()); // 10
```

## API Reference

Option Class

```js
static some<T>(value: T): Option<T>: Creates an instance of Some containing the provided value.
static none<T>(): Option<T>: Creates an instance of None indicating the absence of a value.
get(): T: Returns the value if present, otherwise throws an error.
getOrElse(defaultValue: T): T: Returns the value if present, otherwise returns the provided default value.
isDefined(): boolean: Returns true if the option contains a value, otherwise false.
map<U>(f: (value: T) => U): Option<U>: Transforms the value if present, otherwise returns None.
fold<U>(ifEmpty: () => U, f: (value: T) => U): U: Applies a function to the value if present, otherwise applies the ifEmpty function.
forEach(f: (value: T) => void): void: Applies a side-effecting function to the value if present.
orElse(alternative: Option<T>): Option<T>: Returns the current Option if it contains a value, otherwise returns the provided alternative Option.
```

# Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have feature requests.

Steps to Contribute:
Fork the repository.
Create a new branch for your feature or bugfix.
Implement your changes.
Ensure all tests pass (npm test).
Submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# Acknowledgments

Inspired by Scala’s Option type.

Thanks to all contributors and users of this library.
