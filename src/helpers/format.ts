/**
 * Helper to format a date string 2022-03-26 09:36:41 to dd-mm-yyy
 */
export function formatDate(dateStr: string): string {
  const splittedDateStr = dateStr.split(' ');
  const date = new Date(splittedDateStr[0]);
  let dd: number | string = date.getDate();
  // january is 0, so + 1
  let mm: number | string = date.getMonth() + 1;
  const yyyy = date.getFullYear();

  if (mm < 10) {
    dd = `0${date.getDate()}`;
  }
  if (mm < 10) {
    mm = `0${date.getMonth() + 1}`;
  }

  return `${dd}-${mm}-${yyyy}`;
}
