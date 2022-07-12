import { ISource } from './IMedia';

export interface IMetaTags {
  title: string;
  description: string;
  type: string;
  url: string;
  image: ISource;
  locale: string;
}
