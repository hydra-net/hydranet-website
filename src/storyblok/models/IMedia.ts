export interface ISource {
  id: string;
  filename: string;
  alt: string;
  title?: string;
}

export interface IMedia {
  sources: Array<ISource>;
  cssClasses?: string;
  fallback: ISource;
}
