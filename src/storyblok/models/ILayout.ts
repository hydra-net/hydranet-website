import { IPicture, ISource } from './IPicture';
import { ISocial } from './ISocial';
import { ILink } from './ILink';

export interface ILayout {
  navbar: Array<INavbar>;
  footer: Array<IFooter>;
}

export interface INavbar {
  logo: Array<IPicture>;
  logoMobile: Array<IPicture>;
  navigation: Array<ILink>;
}

export interface IFooter {
  _uid: string;
  logo: ISource;
  socials: Array<ISocial>;
  copyright: string;
}
