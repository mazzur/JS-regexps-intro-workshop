import { validateName } from './name-validation';

describe('validateName', () => {
  test('"John Doe" should be a valid name', () => {
    expect(validateName('John Doe')).toBe(true);
  });

  test('"Andre Villas-Boas" should be a valid name', () => {
    expect(validateName('Andre Villas-Boas')).toBe(true);
  });

  test('"Gabriel Jose de la Concordia Garcia Marquez" should be a valid name', () => {
    expect(validateName('Gabriel Jose de la Concordia Garcia Marquez')).toBe(true);
  });

  test('"John1 Doe" should NOT be a valid name', () => {
    expect(validateName('John1 Doe')).toBe(false);
  });

  test('"Jo@hn D@oe" should NOT be a valid name', () => {
    expect(validateName('Jo@hn D@oe')).toBe(false);
  });

  test('"Andre Villas.Boas" should NOT be a valid name', () => {
    expect(validateName('Andre Villas.Boas')).toBe(false);
  });
});

