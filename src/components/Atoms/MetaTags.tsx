import { ISource } from '../../storyblok/models/IMedia';

export interface IMetaTags {
  title: string;
  description: string;
  type: string;
  url: string;
  image: ISource;
  locale: string;
}

const DEFAULT_HYDRANET_COVER_URL =
  'https://a.storyblok.com/f/154370/700x445/3f1b4e8671/hydra-meta.jpg';
const MetaTags = ({
  title,
  description,
  type = 'website',
  url,
  image,
  locale,
}: IMetaTags) => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={image?.filename || DEFAULT_HYDRANET_COVER_URL}
      />
      <meta property="og:image:alt" content={image?.alt} />
      <meta property="og:locale" content={locale} />

      <meta property="og:site_name" content="Hydranet" />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={image?.filename || DEFAULT_HYDRANET_COVER_URL}
      />
    </>
  );
};

export default MetaTags;
