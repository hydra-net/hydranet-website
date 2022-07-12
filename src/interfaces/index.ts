/**
 * COMMON
 */
import { Sections } from '../enums';

export interface IStyleableProps {
  className?: string;
  style?: Record<string, string>;
}

export type ISelectOption = string;

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
