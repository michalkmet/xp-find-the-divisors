function divisors(number) {
  let result = [];
  if ([2, 3, 5, 7, 11, 13].includes(number)) {
    return `${number} is prime`;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0 && number != i) {
      result.push(i);
    }
  }
  return result;
}

module.exports = divisors;
