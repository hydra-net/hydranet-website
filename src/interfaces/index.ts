/**
 * COMMON
 */
export interface IStyleableProps {
  className?: string;
  style?: Record<string, string>;
}

export interface IFact {
  title: string;
  subtitle: string;
  iconSrc?: string;
}

/**
 * NAVIGATION
 */
export interface INavigationLink {
  name: string;
  href: string;
  target?: string;
}
