/**
 * COMMON
 */
import { Sections } from '../enums';

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

export interface IArticle {
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
  categories: Array<string>;
}

export interface IAppSection {
  id: keyof typeof Sections;
}
/**
 * NAVIGATION
 */
export interface INavigationLink {
  name: string;
  href: string;
  target?: string;
  asButtonClasses?: string;
}
