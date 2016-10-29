# complete-string ([npm](https://www.npmjs.com/package/complete-string))

[![npm version](https://badge.fury.io/js/complete-string.svg)](https://badge.fury.io/js/complete-string)
![](https://img.shields.io/npm/dt/complete-string.svg)
[![Travis](https://img.shields.io/travis/piecioshka/complete-string.svg?maxAge=2592000)](https://travis-ci.org/piecioshka/complete-string)
[![Coverage Status](https://coveralls.io/repos/github/piecioshka/complete-string/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/complete-string?branch=master)

> :hammer: Complete string by any char. This repo is some kind of polyfill for ES2017 padLeft.

## Install

```
$ npm install complete-string
```

## Usage

- `withChar` - complete with any char:

```javascript
CompleteString.withChar(' batman', 10, 'a') // => 'aaa batman'
```

- `withZero` - complete with `0`:

```javascript
var date = new Date();
CompleteString.withZero(date.getMonth(), 2) // => '05'
```

## Unit tests

How to run unit test (written in Jasmine):

```
$ npm test
```

## Code coverage

Use Istanbul to get code coverage ratio.

```
$ npm run coverage
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2014
