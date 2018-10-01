import { numbersOnly } from './numbers-validation';

describe('numbersOnly', () => {
  test('for "1234567" should return true', () => {
    expect(numbersOnly('1234567')).toBe(true);
  });

  test('for "123456" should return true', () => {
    expect(numbersOnly('123456')).toBe(true);
  });

  test('for "foo" should return false', () => {
    expect(numbersOnly('foo')).toBe(false);
  });

  test('for "12321foo" should return false', () => {
    expect(numbersOnly('foo')).toBe(false);
  });

  test('for "123.21" should return false', () => {
    expect(numbersOnly('foo')).toBe(false);
  });

  test('for "123-21" should return false', () => {
    expect(numbersOnly('foo')).toBe(false);
  });
});
