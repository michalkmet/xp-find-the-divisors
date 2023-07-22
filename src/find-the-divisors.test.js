const divisors = require('./find-the-divisors');

describe('Story 1', () => {
  it('UAT1.1 - When user pass 1, it should return []', () => {
    expect(divisors(1)).toStrictEqual([]);
  });
  it('UAT1.2 - When user pass 4, it should return [2]', () => {
    expect(divisors(4)).toStrictEqual([2]);
  });
});
