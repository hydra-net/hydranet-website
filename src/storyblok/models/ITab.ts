import { IParagraph } from './IParagraph';
import { IDownloadLink } from './ILink';

export type DexTabValueLinked = 'mainnet' | 'testnet';

export interface IDexTab {
  headers: Array<ITabHeader>;
  content: Array<IDexTabContent>;
}

export interface ITabHeader {
  _uid: string;
  label: string;
  value: string;
  isSelected?: boolean;
}

export interface IDexTabContent {
  _uid: string;
  body?: Array<IParagraph>;
  links: Array<IDownloadLink>;
  warning?: string;
  tabLinkedValue: DexTabValueLinked;
}
