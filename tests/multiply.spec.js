const { multiply } = require('../calculator');

describe('Multiply', () => {
  test('Should multiply two positive numbers', () => {
    const result = multiply(2, 6);
    expect(result).toBe(12);
  });

  test('Mutiplication of a positive number and a negative number should return a negative number', () => {
    const result = multiply(3, -1);
    expect(result).toBe(-3);
  });

  test('Mutiplication of any number by 0 should return 0', () => {
    const result = multiply(13, 0);
    expect(result).toBe(0);
  });
});
