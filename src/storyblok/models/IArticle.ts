import { ISource } from './IMedia';

export interface IArticle {
  _uid: string;
  first_published_at: string;
  full_slug: string;
  content: {
    title: string;
    release_date: string;
    description: string;
    category: string;
    keywords: Array<string>;
    miniature: ISource;
    rich_text: string;
  };
}
