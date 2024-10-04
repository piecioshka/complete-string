# complete-string

[![node version](https://img.shields.io/node/v/complete-string.svg)](https://www.npmjs.com/package/complete-string)
[![npm version](https://badge.fury.io/js/complete-string.svg)](https://badge.fury.io/js/complete-string)
[![downloads count](https://img.shields.io/npm/dt/complete-string.svg)](https://www.npmjs.com/package/complete-string)
[![license](https://img.shields.io/npm/l/complete-string.svg)](https://www.npmjs.com/package/complete-string)
[![travis-ci](https://api.travis-ci.com/piecioshka/complete-string.svg?branch=master)](https://app.travis-ci.com/github/piecioshka/complete-string)

:hammer: Complete string by any char. This repo is some kind of polyfill for ES2017 padStart.

## Install

```bash
npm install complete-string
```

## API

### `withChar(string: string, length: number, char: string)`

Complete with any char:

```javascript
CompleteString.withChar(' batman', 10, 'a') // => 'aaa batman'
```

### `withZero(string: string, length: number)`

Complete with `0`:

```javascript
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
