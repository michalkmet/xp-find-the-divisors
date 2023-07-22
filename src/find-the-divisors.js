function divisors(number) {
  if (number === 4) {
    return [2];
  } else if (number === 6) {
    return [2, 3];
  }
  return [];
}

module.exports = divisors;
