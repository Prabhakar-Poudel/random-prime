'use-strict';

const randomPrime = (min, max) => {
  if (max === undefined) {
    if (min !== undefined) {
      max = min;
      min = 0;
    } else {
      max = Number.MAX_SAFE_INTEGER
    }
  }
  if (min === undefined) {
    min = 0;
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected both arguments of type Number');
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  const range = max - min;

  let randomNum = 1;
  while (!isPrime(randomNum)) {
    randomNum = Math.floor(Math.random() * range) + min;
  }

  return randomNum;
}

const isPrime = number => {
  if (number <= 3) {
    return number > 1;
  }
  if ( number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  const maxDivisor = Math.floor(Math.sqrt(number));
  for (let i = 0; i <= maxDivisor; i+=6) {
    if (number % i === 0 || number % i + 2 === 0) {
      return false;
    }
  }
  return true;
}
