import { IParagraph } from './IParagraph';
import { ILink } from './ILink';
import { IMedia } from './IMedia';

export interface ICallToAction {
  _uid: string;
  title: string;
  body: Array<IParagraph>;
  button: Array<ILink>;
  picture: Array<IMedia>;
}
