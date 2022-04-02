/**
 * COMMON
 */
export interface IStyleable {
  className?: string;
  style?: Record<string, string>;
}

/**
 * NAVIGATION
 */
export interface INavigationLink {
  name: string;
  href: string;
  target?: string;
}
