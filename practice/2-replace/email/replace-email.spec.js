import { replaceStaticEmailsWithLinks } from './replace-email';

describe('replaceStaticEmailsWithLinks', () => {
  test('should make single email in text clicable', () => {
    const input = '<p>My email is my-email@gmail.com, contact me any time.</p>';
    expect(replaceStaticEmailsWithLinks(input)).toBe(
      '<p>My email is <a href="mailto:my-email@gmail.com">my-email@gmail.com</a>, contact me any time.</p>'
    );
  });

  test('should make several emails clicable', () => {
    const input = '<p>My emails are  my-email@gmail.com and my-other-email@mail.ru, contact me any time.</p>';
    expect(replaceStaticEmailsWithLinks(input)).toBe(
      '<p>My emails are  <a href="mailto:my-email@gmail.com">my-email@gmail.com</a> and <a href="mailto:my-other-email@mail.ru">my-other-email@mail.ru</a>, contact me any time.</p>'
    );
  });
});
