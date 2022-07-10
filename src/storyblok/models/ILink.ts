import { IMedia } from './IMedia';

export type LinkTarget = '_blank' | '_self';

export interface ILink {
  _uid: string;
  href: string;
  name: string;
  target: LinkTarget;
  cssClasses: string;
}

export interface IDownloadLink {
  _uid: string;
  link: Array<ILink>;
  asButton?: boolean;
  isDisabled?: boolean;
  picture?: Array<IMedia>;
}
