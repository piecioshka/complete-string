# complete-string

Complete string by any char. This repo is some kind of polyfill for ES7 padLeft.

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

## Test

As pre-installation you should have tool called `jest`:

```
npm test
```

## Authors

 - [Piotr Kowalski](http://twitter.com/piecioshka)

## License

[The MIT License](http://piecioshka.mit-license.org)
