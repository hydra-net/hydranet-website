import { IParagraph } from './IParagraph';
import { ILink } from './ILink';
import { ISource } from './IMedia';

export interface ITestimonial {
  _uid: string;
  order: string;
  body: Array<IParagraph>;
  author: string;
  quoteUrl?: ILink;
  backgroundImage: ISource;
}
