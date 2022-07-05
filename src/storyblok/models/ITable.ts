import { IMedia } from './IMedia';

export interface ITable {
  rows: Array<IStoryblokTableRow>;
  headers: Array<ITableHeader>;
}
export interface IStoryblokTableRow {
  _uid: string;
  row: Array<ITableRow>;
}
export interface ITableRow {
  _uid: string;
  content: string;
  extra?: string;
  cssClasses?: string;
  isImage?: boolean;
  picture?: Array<IMedia>;
}

export interface ITableHeader {
  _uid: string;
  content: string;
  colSpan: number;
}
