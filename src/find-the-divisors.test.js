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
  it('UAT1.5 - When user pass 9, it should return [3]', () => {
    expect(divisors(9)).toStrictEqual([3]);
  });
  it('UAT1.6 - When user pass 10, it should return [2,5]', () => {
    expect(divisors(10)).toStrictEqual([2, 5]);
  });
  it('UAT1.7 - When user pass 12, it should return [2,3,4,6]', () => {
    expect(divisors(12)).toStrictEqual([2, 3, 4, 6]);
  });
});

describe('Story 2', () => {
  it('UAT2.1 - When user pass 2, it should return "2" is prime', () => {
    expect(divisors(2)).toStrictEqual('2 is prime');
  });
  it('UAT2.2 - When user pass 3, it should return "3" is prime', () => {
    expect(divisors(3)).toStrictEqual('3 is prime');
  });
  it('UAT2.3 - When user pass 5, it should return "5" is prime', () => {
    expect(divisors(5)).toStrictEqual('5 is prime');
  });
  it('UAT2.4 - When user pass 7, it should return "7" is prime', () => {
    expect(divisors(7)).toStrictEqual('7 is prime');
  });
});
