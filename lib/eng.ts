import Options from './options';
import { GetDateComponents } from './common';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function getMonthString(month: number): string {
  const i = month - 1;
  if (i < 0 || i >= MONTHS.length) {
    return '';
  }
  return MONTHS[i];
}

export function English(date: Date, options?: Options): string {
  const opt = options || {};
  const [y, m, d] = GetDateComponents(date);
  const s = opt.DM ? `${d} ${getMonthString(m)}` : `${getMonthString(m)} ${d}`;
  if (opt.omitCurrentYear && y === new Date().getFullYear()) {
    return s;
  }
  return `${s}, ${y}`;
}
