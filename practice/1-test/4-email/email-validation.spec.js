import { validateEmail } from './email-validation';

describe('validateEmail', () => {
  test('"JohnDoe@gmail.com" should be VALID email', () => {
    expect(validateEmail('JohnDoe@gmail.com')).toBe(true);
  });

  test('"some-email@mail.ru" should be VALID email', () => {
    expect(validateEmail('some-email@mail.ru')).toBe(true);
  });

  test('"some-email42@mail.ru" should be VALID email', () => {
    expect(validateEmail('some-email42@mail.ru')).toBe(true);
  });

  test('"some.email42@mail.ru" should be VALID email', () => {
    expect(validateEmail('some.email42@mail.ru')).toBe(true);
  });

  test('"some%email@gmail.com" should be INVALID email', () => {
    expect(validateEmail('some%email@mail.ru')).toBe(false);
  });

  test('"some@gmail" should be INVALID email', () => {
    expect(validateEmail('some@gmail')).toBe(false);
  });

  test('"s/ome@gmail.com" should be INVALID email', () => {
    expect(validateEmail('s/ome@gmail.com')).toBe(false);
  });

  test('"some..email@gmail.com" should be INVALID email', () => {
    expect(validateEmail('some..email@gmail.com')).toBe(false);
  });
});
