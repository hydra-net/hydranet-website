/**
 * Helper to format a date string "Sun, 17 Apr 2022 21:06:59 GMT" to dd-mm-yyy
 */

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-gb', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'utc',
  }); // 20 February, 2019
}
