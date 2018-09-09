const { SimplifiedChinese, GetDateComponents } = require('..');

const DATE = new Date('1995-12-17T03:24:00');
const NOW = new Date();

test('Full', () => {
  expect(SimplifiedChinese(DATE)).toBe('1995年12月17日');
});

test('Year omitted', () => {
  const [_, m, d] = GetDateComponents(NOW);
  expect(SimplifiedChinese(NOW, { omitCurrentYear: true })).toBe(`${m}月${d}日`);
});

