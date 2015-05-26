# complete.js

Complete string by passed chars to passes size.

## Usage

- `withChar` - complete with any char:

```javascript
Complete.withChar(' batman', 10, 'a') // => 'aaa batman'
```

- `withZero` - complete with `0`:

```javascript
var date = new Date();
Complete.withZero(date.getMonth(), 2) // => '05'
```

## Test

As pre-installation you should have tool called `jest`:

```
npm install -g jest
```

Next, to run test run command:

```
npm test
```

in project directory, of course.

## Authors

 - [piecioshka](http://twitter.com/piecioshka)

## License

[The Mit License](http://piecioshka.mit-license.org)
