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
const Home: NextPage = ({ story }) => {
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
