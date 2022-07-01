import type { NextPage } from 'next';

import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react';

const Dex: NextPage = ({ story }) => {
  story = useStoryblokState(story);
  return <StoryblokComponent blok={story.content} />;
};

export async function getStaticProps() {
  // the slug of the story
  const slug = 'dex';

  const params = {
    version: 'published', // or 'published'
    // version: 'draft', // or 'published'
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

export default Dex;
