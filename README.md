# Promise.ass(iterable)

## What is this?

A function that aliases the very handy `Promise.all` as `Promise.ass`.

## Installing
```bash
npm i promise-ass
```

## Why?

Have you ever typed `Promise.ass` instead of `Promise.all`, only to get a `TypeError: Promise.ass() is not a function`? Not anymore!

## This is fantastic!

No it isn't.

## When should I use this?

Never. Don't even think about using it at work or in production code of any sort.

## License?

MIT

## How to use

This is exported as a sole export of a CommonJS module. Just import the module, call the returned function, and you're all set.

```javascript
require("promise-ass")();

Promise
  .ass([promise1, promise2, promise3])
  .then(([val1, val2, val3]) => {
    /* Do something with values */
  });
```

## How to build

This literally just aliases an existing method of the Promise object so there are no dependencies and no building.

## How to run tests
```
npm install --save-dev
npm test
```
