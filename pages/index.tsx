import type { NextPage } from 'next';

import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react';

// const Home: NextPage = () => (
//   <>
//     <Layout navigation={HOME_NAVIGATION}>
//       <Landing />
//       <AboutSection id={'about'} />
//       <ProductsSection id={'products'} />
//       <RoadmapSection id={'roadmap'} />
//       <BuySection id={'buy'} />
//       <ArticlesSection id={'articles'} />
//     </Layout>
//   </>
// );

const Home: NextPage = ({ story }) => {
  story = useStoryblokState(story);
  return <StoryblokComponent blok={story.content} />;
};

export async function getStaticProps() {
  // the slug of the story
  const slug = 'home';

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

export default Home;
