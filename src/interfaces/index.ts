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

export interface ISocial {
  name: string;
  url: string;
  icon: string;
}

/**
 * NAVIGATION
 */
export interface INavigationLink {
  name: string;
  href: string;
  target?: string;
}
