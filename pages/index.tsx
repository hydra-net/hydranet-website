import Head from 'next/head';
import type { NextPage } from 'next';
import {
  getStoryblokApi,
  StoryblokComponent,
  StoryData,
  useStoryblokState,
} from '@storyblok/react';

import { DEFAULT_HYDRANET_COVER_URL } from '../src/constants';
import { IMetaTags } from '../src/storyblok/models/IMetaTags';

const Home: NextPage<{ story: StoryData }> = ({ story }) => {
  story = useStoryblokState(story);
  // @ts-ignore
  const { MetaTagsBlok }: Array<IMetaTags> = story.content;
  const { title, description, type, url, image, locale } = MetaTagsBlok[0];

  return (
    <>
      <Head>
        <title>{MetaTagsBlok[0]?.title || 'Hydranet'}</title>
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
      </Head>
      <StoryblokComponent blok={story.content} />
    </>
  );
};

export async function getStaticProps() {
  // slug of story
  const slug = 'home';
  const params = {
    version: 'published',
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
  };
}

export default Home;
