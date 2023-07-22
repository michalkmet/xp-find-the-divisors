function divisors(number) {
  let result = [];
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
  return result;
}

module.exports = divisors;
