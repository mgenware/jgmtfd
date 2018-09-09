import Options from './options';
import { GetDateComponents } from './common';

export function SimplifiedChinese(date: Date, options?: Options): string {
  const opt = options || {};
  const [y, m, d] = GetDateComponents(date);
  const s = `${m}月${d}日`;
  if (opt.omitCurrentYear && y === new Date().getFullYear()) {
    return s;
  }
  return `${y}年${s}`;
}
