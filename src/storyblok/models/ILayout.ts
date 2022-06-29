import { ISource } from './IPicture';
import { ISocial } from './ISocial';

export interface ILayout {
  footer: Array<IFooter>;
}

export interface IFooter {
  _uid: string;
  logo: ISource;
  socials: Array<ISocial>;
  copyright: string;
}
