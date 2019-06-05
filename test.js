const random = require( './index');
const assert = require('assert');

const { isPrime, randomPrime } = random;

describe('isPrime()', () => {
  it('returns true for prime numbers', () => {
    expect(isPrime(2)).toBeTruthy();
    expect(isPrime(3)).toBeTruthy();
    expect(isPrime(101)).toBeTruthy();
    expect(isPrime(15487403)).toBeTruthy();
    expect(isPrime(32416190071)).toBeTruthy();
  });
  it('returns false for non-prime numbers', () => {
    expect(isPrime(1)).toBeFalsy();
    expect(isPrime(4)).toBeFalsy();
    expect(isPrime(-7)).toBeFalsy();
    expect(isPrime(15487402)).toBeFalsy();
    expect(isPrime(32416190079)).toBeFalsy();
  });
});

describe('randomPrime()', () => {
  it('works for no input', () => {
    expect(randomPrime()).toEqual(expect.anything());
    expect(randomPrime()).toBeGreaterThan(1);
    expect(randomPrime()).toBeLessThan(Number.MAX_SAFE_INTEGER);
  });
  it('works for single (max) input', () => {
    expect(randomPrime(2)).toBe(2);
    expect(randomPrime(10)).toBeLessThan(10);
    expect(randomPrime(100)).toBeLessThan(100);
    expect(randomPrime(10)).toBeGreaterThan(1);
  });
  it('works for min, max inputs', () => {
    expect(randomPrime(3, 4)).toBe(3);
    expect(randomPrime(4, 5)).toBe(5);
    expect(randomPrime(14, 18)).toBe(17);
    expect(randomPrime(10, 100)).toBeGreaterThan(10);
    expect(randomPrime(10, 100)).toBeLessThan(100);
    expect(randomPrime(7, 7)).toBe(7);
    expect(randomPrime(-10, 10)).not.toBeNull();
    expect(randomPrime(-10, 2)).toBe(2);

  });
  it('returns null if no prime number exist', () => {
    expect(randomPrime(1)).toBeNull();
    expect(randomPrime(-10)).toBeNull();
    expect(randomPrime(-10, 1)).toBeNull();
    expect(randomPrime(0)).toBeNull();
    expect(randomPrime(10, 10)).toBeNull();
    expect(randomPrime(14, 16)).toBeNull();
  });
  it('throws error for non numeric inputs', () => {
    expect(() => randomPrime('foo')).toThrow(TypeError);
    expect(() => randomPrime(23, 'foo')).toThrow(TypeError);
    expect(() => randomPrime('foo', 'bar')).toThrow(TypeError);
  });
});

