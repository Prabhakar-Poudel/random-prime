# random-prime

> Generate a random prime number

This uses `Math.random` internally.

## Install
```
npm i random-prime --save
```

## Example
```javascript
import randomPrime from 'random-prime';

console.log(randomPrime());
// 254205915209711
console.log(randomPrime(500));
// 119
console.log(randomPrime(200, 800));
// 413
```

## API

### randomPrime()
Generate a random prime number from 0 to [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

### randomPrime(max)
Generate a random prime number from 0 to `max`. Excludes `max`.

### randomPrime(min, max)
Generate a random prime number from `min` to `max`. Includes `min` and excludes `max`.
