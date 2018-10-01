import { parseEmailDomain } from './parse-email-domain';

describe('parseEmailDomain', () => {
  test('should return "gmail.com" for "some-email@gmail.com"', () => {
    expect(parseEmailDomain('some-email@gmail.com')).toBe('gmail.com');
  });

  test('should return "epam.com" for "myOwnEmail@epam.com"', () => {
    expect(parseEmailDomain('someEmail@epam.com')).toBe('epam.com');
  });
});
