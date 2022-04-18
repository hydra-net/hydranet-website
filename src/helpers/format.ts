/**
 * Helper to format a date string "Sun, 17 Apr 2022 21:06:59 GMT" to dd-mm-yyy
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  let dd: number | string = date.getDate();
  // january is 0, so + 1
  let mm: number | string = date.getMonth() + 1;
  const yyyy = date.getFullYear();

  if (dd < 10) {
    dd = `0${date.getDate()}`;
  }
  if (mm < 10) {
    mm = `0${date.getMonth() + 1}`;
  }

  return `${dd}.${mm}.${yyyy}`;
}
