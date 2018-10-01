import { validatePhone } from './phone-validation';

describe('validatePhone', () => {
  test('for "+79224836743" should return true', () => {
    expect(validatePhone('+79224836743')).toBe(true);
  });

  test('for "+84345836743" should return false', () => {
    expect(validatePhone('+84345836743')).toBe(false);
  });

  test('for "+743458367" should return false', () => {
    expect(validatePhone('+743458367')).toBe(false);
  });

  test('for "89743458367" should return false', () => {
    expect(validatePhone('89743458367')).toBe(false);
  });
});
