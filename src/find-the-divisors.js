function divisors(number) {
  let result = [];
  if ([2, 3].includes(number)) {
    return `${number} is prime`;
  }
  if (number % 2 === 0) {
    result.push(2);
  }
  if (number % 3 === 0) {
    result.push(3);
  }
  if (number % 4 === 0 && number != 4) {
    result.push(4);
  }
  if (number % 5 === 0) {
    result.push(5);
  }
  if (number % 6 === 0 && number != 6) {
    result.push(6);
  }
  return result;
}

module.exports = divisors;
