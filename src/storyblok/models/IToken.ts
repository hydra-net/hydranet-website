import { IMedia } from './IMedia';

export interface IToken {
  _uid: string;
  name: string;
  symbol: string;
  picture: Array<IMedia>;
  isComingSoon?: boolean;
}
