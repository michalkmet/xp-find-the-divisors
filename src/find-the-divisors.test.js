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
  it('UAT2.5 - When user pass 11, it should return "11" is prime', () => {
    expect(divisors(11)).toStrictEqual('11 is prime');
  });
  it('UAT2.6 - When user pass 13, it should return "13" is prime', () => {
    expect(divisors(13)).toStrictEqual('13 is prime');
  });
});

describe('Story 3', () => {
  it('UAT3.1 - When user pass null, it should return an exception', () => {
    expect(() => divisors(null)).toThrow('wrong input');
  });
  it('UAT3.2 - When user pass 0, it should return an exception', () => {
    expect(() => divisors(0)).toThrow('wrong input');
  });
});

describe('Story 4', () => {
  it('UAT4.1 - When user pass 25, it should return [5]', () => {
    expect(divisors(25)).toStrictEqual([5]);
  });
  it('UAT4.2 - When user pass 27, it should return [3,9]', () => {
    expect(divisors(27)).toStrictEqual([3, 9]);
  });
  it('UAT4.3 - When user pass 24, it should return [2,3,4,6,8,12]', () => {
    expect(divisors(24)).toStrictEqual([2, 3, 4, 6, 8, 12]);
  });
  it('UAT4.4 - When user pass 33, it should return [3,11]', () => {
    expect(divisors(33)).toStrictEqual([3, 11]);
  });
  it('UAT4.5 - When user pass 48, it should return [2,3,4,6,8,12,16,24]', () => {
    expect(divisors(48)).toStrictEqual([2, 3, 4, 6, 8, 12, 16, 24]);
  });
});

describe('Story 5', () => {
  it('UAT5.1 - When user pass 37, it should return "37" is prime', () => {
    expect(divisors(37)).toStrictEqual('37 is prime');
  });
  it('UAT5.2 - When user pass 41, it should return "41" is prime', () => {
    expect(divisors(41)).toStrictEqual('41 is prime');
  });
  it('UAT5.3 - When user pass 139, it should return "139" is prime', () => {
    expect(divisors(139)).toStrictEqual('139 is prime');
  });
});
