# random-prime
[![npm](https://img.shields.io/npm/v/random-prime.svg)](https://www.npmjs.com/package/random-prime)
[![Build Status](https://github.com/Prabhakar-Poudel/random-prime/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/Prabhakar-Poudel/random-prime/actions?query=branch%3Amaster)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Generate (or check for) a random prime number

This uses `Math.random` internally.

## Install
```
npm i random-prime --save
```
or
```
yarn add random-prime
```

## Example
```javascript
const randomPrime = require('random-prime').randomPrime;

console.log(randomPrime());
// 254205915209711
console.log(randomPrime(500));
// 119
console.log(randomPrime(200, 800));
// 413
```

## API

### randomPrime()
Generate a random prime number from 0 to [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

> Returns a prime number

### randomPrime(max)
Generate a random prime number from `0` to `max`.

> Returns a prime number or null if `max` < 2
> Throws TypeError if `max` is not a Number

### randomPrime(min, max)
Generate a random prime number from `min` to `max`.

> Returns a prime number or null if there is no prime number between `min` and `max`
> Throws TypeError if `min` and/or `max` is not a Number

### isPrime(num)
An efficient method to check if a number is prime.
> Returns true if `num` is prime, false if `num` is not prime.
> Throws TypeError if the input is not a Number

#### Example
```javascript
const isPrime = require('random-prime').isPrime;

console.log(isPrime(2));
// true
console.log(isPrime(32416190079));
// true
console.log(isPrime(254205915209711));
// false
console.log(isPrime(500));
// false
console.log(isPrime(-10));
// false
console.log(isPrime(137));
// true
```

### eachPrime([num])
An efficient method to check if every numbers in a list is prime.
> Returns true if all items in list are prime, false otherwise.
> Throws TypeError if the input is not of type Array or is an empty array

#### Example
```javascript
const eachPrime = require('random-prime').eachPrime;

console.log(eachPrime([2, 19, 83, 47]));
// true
console.log(eachPrime([32416190079, 13, 23]));
// true
console.log(eachPrime([500, 1000, 2000]));
// false
console.log(eachPrime([2, 3, -10]));
// false
```
