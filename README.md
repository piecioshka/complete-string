# complete-string

[![node version](https://img.shields.io/node/v/complete-string.svg)](https://www.npmjs.com/package/complete-string)
[![npm version](https://badge.fury.io/js/complete-string.svg)](https://badge.fury.io/js/complete-string)
[![downloads count](https://img.shields.io/npm/dt/complete-string.svg)](https://www.npmjs.com/package/complete-string)
[![license](https://img.shields.io/npm/l/complete-string.svg)](https://www.npmjs.com/package/complete-string)
[![github-ci](https://github.com/piecioshka/complete-string/actions/workflows/testing.yml/badge.svg)](https://github.com/piecioshka/complete-string/actions/workflows/testing.yml)

:hammer: Complete string by any char.

> WARNING: This repo is shim for `String.prototype.padStart` (defined in ES2017 spec).

## Install

```bash
npm install complete-string
```

## Usage

```javascript
var CompleteString = require('complete-string');

// Complete with any char
CompleteString.withChar(' batman', 10, 'a') // => 'aaa batman'

// Complete with `0`:
var date = new Date();
CompleteString.withZero(date.getMonth(), 2) // => '05'
```

## Unit tests

```bash
npm test
```

## Code coverage

```bash
npm run coverage
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2014
