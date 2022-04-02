/**
 * COMMON
 */
export interface IStyleableProps {
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
