export function GetDateComponents(date: Date): number[] {
  return [date.getFullYear(), (date.getMonth() + 1), date.getDate()];
}
