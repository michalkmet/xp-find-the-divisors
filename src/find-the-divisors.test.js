const divisors = require('./find-the-divisors');

describe('Story 1', () => {
  it('UAT1.1 - When user pass 1, it should return []', () => {
    expect(divisors(1)).toStrictEqual([]);
  });
  it('UAT1.2 - When user pass 4, it should return [2]', () => {
    expect(divisors(4)).toStrictEqual([2]);
  });
  it('UAT1.3 - When user pass 6, it should return [2,3]', () => {
    expect(divisors(6)).toStrictEqual([2, 3]);
  });
  it('UAT1.4 - When user pass 8, it should return [2,4]', () => {
    expect(divisors(8)).toStrictEqual([2, 4]);
  });
});
