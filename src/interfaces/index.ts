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

export interface IArticle {
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
  'content:encoded': string;
  categories: Array<string>;
}

export interface IMediumRssResponseDto {
  rss: {
    channel: {
      item: Array<IArticle>;
    };
  };
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
  bg?: string;
}
