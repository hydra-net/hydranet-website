import { IParagraph } from './IParagraph';
import { IDownloadLink } from './ILink';

export type DexTabValueLinked = 'mainnet' | 'testnet';
export type RoadmapTabValueLinked = 'Q1' | 'Q2' | 'Q3' | 'Q4';

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

type RoadmapQuarter = {
  [key in RoadmapTabValueLinked]: Array<ITimelineItem>;
};

export interface IRoadmapYear extends RoadmapQuarter {
  _uid: string;
  yearRelated: string;
}

export interface ITimelineContent {
  _uid: string;
  items: Array<ITimelineItem>;
  tabLinkedValue: DexTabValueLinked;
}

export interface ITimelineItem {
  _uid: string;
  category: string;
  items: string;
}
