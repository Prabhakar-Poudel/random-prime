import { eachPrime, isPrime, randomPrime } from './index'

describe('isPrime()', () => {
  it('returns true for prime numbers', () => {
    expect(isPrime(2)).toBeTruthy()
    expect(isPrime(3)).toBeTruthy()
    expect(isPrime(101)).toBeTruthy()
    expect(isPrime(15487403)).toBeTruthy()
    expect(isPrime(32416190071)).toBeTruthy()
  })
  it('returns false for non-prime numbers', () => {
    expect(isPrime(1)).toBeFalsy()
    expect(isPrime(4)).toBeFalsy()
    expect(isPrime(-7)).toBeFalsy()
    expect(isPrime(235)).toBeFalsy()
    expect(isPrime(15487402)).toBeFalsy()
    expect(isPrime(32416190079)).toBeFalsy()
    expect(isPrime(4678117)).toBeFalsy()
    expect(isPrime(2.5)).toBeFalsy()
    expect(isPrime(101.3)).toBeFalsy()
  })
  it('when called with invalid inputs', () => {
    // @ts-expect-error missing argumentty
    expect(isPrime()).toBeFalsy()
    // @ts-expect-error Argument type do not match
    expect(isPrime('foo')).toBeFalsy()
  })
})

describe('eachPrime()', () => {
  it('returns true for prime numbers', () => {
    expect(eachPrime([2, 19, 83, 47])).toBeTruthy()
    expect(eachPrime([2])).toBeTruthy()
    expect(eachPrime([101, 15487403, 32416190071])).toBeTruthy()
  })
  it('returns false for any non-prime number in the list', () => {
    expect(eachPrime([1, 2, 3])).toBeFalsy()
    expect(eachPrime([40, 50, 60])).toBeFalsy()
    expect(eachPrime([-7, 47, 83])).toBeFalsy()
    expect(eachPrime([32416190071, 15487403, 235])).toBeFalsy()
    expect(eachPrime([13, 15487402])).toBeFalsy()
    expect(eachPrime([32416190079])).toBeFalsy()
  })
  it('when called with invalid inputs', () => {
    // @ts-expect-error Argument missing
    expect(eachPrime()).toBeFalsy()
    // @ts-expect-error Argument type do not match
    expect(eachPrime(['foo'])).toBeFalsy()
    // @ts-expect-error Argument type do not match
    expect(eachPrime('foo')).toBeFalsy()
    // @ts-expect-error Argument type do not match
    expect(eachPrime([11, 17, 'foo'])).toBeFalsy()
    // @ts-expect-error Argument type do not match
    expect(eachPrime({ a: 11, b: 17 })).toBeFalsy()
    expect(eachPrime([])).toBeFalsy()
  })
})

describe('randomPrime()', () => {
  it('works for no input', () => {
    expect(randomPrime({})).toEqual(expect.anything())
    expect(randomPrime({})).toBeGreaterThan(1)
    expect(randomPrime({})).toBeLessThan(Number.MAX_SAFE_INTEGER)
  })
  it('works for single (max) input', () => {
    expect(randomPrime({ max: 2 })).toBe(2)
    expect(randomPrime({ max: 10 })).toBeLessThan(10)
    expect(randomPrime({ max: 100 })).toBeLessThan(100)
    expect(randomPrime({ max: 10 })).toBeGreaterThan(1)
  })
  it('works for min, max inputs', () => {
    expect(randomPrime({ min: 3, max: 4 })).toBe(3)
    expect(randomPrime({ min: 4, max: 5 })).toBe(5)
    expect(randomPrime({ min: 14, max: 18 })).toBe(17)
    expect(randomPrime({ min: 10, max: 100 })).toBeGreaterThan(10)
    expect(randomPrime({ min: 10, max: 100 })).toBeLessThan(100)
    expect(randomPrime({ min: 7, max: 7 })).toBe(7)
    expect(randomPrime({ min: -10, max: 10 })).not.toBeNull()
    expect(randomPrime({ min: -10, max: 2 })).toBe(2)
  })
  it('returns null if no prime number exist', () => {
    expect(randomPrime({ max: 1 })).toBeNull()
    expect(randomPrime({ max: -10 })).toBeNull()
    expect(randomPrime({ min: -10, max: 1 })).toBeNull()
    expect(randomPrime({ max: 0 })).toBeNull()
    expect(randomPrime({ min: 10, max: 10 })).toBeNull()
    expect(randomPrime({ min: 14, max: 16 })).toBeNull()
  })
  it('when called with invalid inputs', () => {
    // @ts-expect-error Argument type do not match
    expect(randomPrime({ min: 'foo' })).toBeNull()
    // @ts-expect-error Argument type do not match
    expect(randomPrime({ min: 23, max: 'foo' })).toBeNull()
    // @ts-expect-error Argument type do not match
    expect(randomPrime({ min: 'foo', max: 'bar' })).toBeNull()
  })
})
