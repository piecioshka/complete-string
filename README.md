# complete-string

[![node version](https://img.shields.io/node/v/complete-string.svg)](https://www.npmjs.com/package/complete-string)
[![npm version](https://badge.fury.io/js/complete-string.svg)](https://badge.fury.io/js/complete-string)
[![downloads count](https://img.shields.io/npm/dt/complete-string.svg)](https://www.npmjs.com/package/complete-string)
[![size](https://packagephobia.com/badge?p=complete-string)](https://packagephobia.com/result?p=complete-string)
[![license](https://img.shields.io/npm/l/complete-string.svg)](https://piecioshka.mit-license.org)
[![github-ci](https://github.com/piecioshka/complete-string/actions/workflows/testing.yml/badge.svg)](https://github.com/piecioshka/complete-string/actions/workflows/testing.yml)

🔨 Complete string by any char.

> WARNING: This repo is shim for `String.prototype.padStart` (defined in ES2017 spec).

## Install

```bash
npm install complete-string
```

## Usage

```javascript
// CommonJS
const CompleteString = require('complete-string');

// or ES Modules
import * as CompleteString from 'complete-string';

CompleteString.withChar(' batman', 10, 'a') // => 'aaa batman'
CompleteString.withZero('5', 2) // => '05'

// or import particular functions
import { withChar, withZero } from "complete-string";

withChar(' zorro', 10, 'z') // => 'zzzz zorro'
withZero('6', 2) // => '06'
```

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2014
