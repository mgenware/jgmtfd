const { English, GetDateComponents, getEnglishMonthString } = require('..');

const DATE = new Date('1995-12-17T03:24:00');
const NOW = new Date();

test('Full', () => {
  expect(English(DATE)).toBe('Dec 17, 1995');
});

test('Full, DM', () => {
  expect(English(DATE, { DM: true })).toBe('17 Dec, 1995');
});

test('Year omitted', () => {
  const [_, m, d] = GetDateComponents(NOW);
  const monthString = getEnglishMonthString(m);
  expect(English(NOW, { omitCurrentYear: true })).toBe(`${monthString} ${d}`);
});

test('Year omitted, DM', () => {
  const [_, m, d] = GetDateComponents(NOW);
  const monthString = getEnglishMonthString(m);
  expect(English(NOW, { omitCurrentYear: true, DM: true })).toBe(`${d} ${monthString}`);
});
