import { ICaption } from './ICaption';
import { IParagraph } from './IParagraph';
import { ILink } from './ILink';
import { IMedia } from './IMedia';

interface IShowCaseItem {
  _uid: string;
  title: string;
  link?: Array<ILink>;
  media: Array<IMedia>;
}

export interface IProduct {
  _uid: string;
  caption: Array<ICaption>;
  body: Array<IParagraph>;
  link: Array<ILink>;
  picture: Array<IMedia>;
  showcase_items?: Array<IShowCaseItem>;
}
