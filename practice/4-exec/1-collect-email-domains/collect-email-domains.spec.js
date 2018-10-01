import { collectEmailDomains } from './collect-email-domains';

describe('collectEmailDomains', () => {
  test('should return comma-separated list of email domains in the text in alphabetical order', () => {
    const input = 'Follow up that email to john-doe@epam.com, some@mail.ru, john-snow@epam.com, john-john@gmail.com';
    expect(collectEmailDomains(input)).toBe('epam.com,gmail.com,mail.ru');
  });
});
