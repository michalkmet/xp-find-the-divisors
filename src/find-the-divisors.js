function divisors(number) {
  let result = [];
  for (let i = 2; i < number; i++) {
    if (number % i === 0 && number != i) {
      result.push(i);
    }
  }
  if (result.length === 0 && number != 1) return `${number} is prime`;
  return result;
}

module.exports = divisors;
