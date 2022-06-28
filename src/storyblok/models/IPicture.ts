export interface ISource {
  id: string;
  filename: string;
  alt: string;
}

export interface IPicture {
  sources: Array<ISource>;
  cssClasses?: string;
  fallback: ISource;
}
