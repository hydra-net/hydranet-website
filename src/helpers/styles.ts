/**
 * Helper to merge conditional classNames attributes
 * @param classes
 */
export function mergeClassNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}
