/**
 * COMMON
 */
import { Sections } from '../enums';

export interface IStyleableProps {
  className?: string;
  style?: Record<string, string>;
}

export type ISelectOption = string;

export interface IAppSection {
  id: keyof typeof Sections;
}
