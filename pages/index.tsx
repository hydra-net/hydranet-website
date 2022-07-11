import Head from 'next/head';
import type { NextPage } from 'next';

import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react';
import MetaTags, { IMetaTags } from '../src/components/Atoms/MetaTags';

// @ts-ignore
// eslint-disable-next-line react/prop-types
const Home: NextPage = ({ story, articles }) => {
  story = useStoryblokState(story);
  // @ts-ignore
  // eslint-disable-next-line react/prop-types
  const { MetaTagsBlok }: Array<IMetaTags> = story.content;
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/prop-types */}
        <title>{MetaTagsBlok[0]?.title || 'Hydranet'}</title>
        <MetaTags {...MetaTagsBlok[0]} />
      </Head>
      {/* eslint-disable-next-line react/prop-types */}
      <StoryblokComponent blok={story.content} articles={articles} />
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
  const articlesResponse = await storyblokApi.get(
    `cdn/stories/?starts_with=articles/&sort_by=created_at:desc&per_page=6`,
    params
  );

  return {
    props: {
      story: data ? data.story : false,
      articles: articlesResponse?.data?.stories
        ? articlesResponse.data.stories
        : false,
      key: data ? data.story.id : false,
    },
  };
}

export default Home;
