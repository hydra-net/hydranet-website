import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../src/components/Templates/Layout';
import ProductsSection from '../src/components/Templates/ProductsSection';
import RoadmapSection from '../src/components/Templates/RoadmapSection';
import ArticlesSection from '../src/components/Templates/ArticlesSection';
import AboutSection from '../src/components/Templates/AboutSection';
import Landing from '../src/components/Templates/Landing';
import MetaTags from '../src/components/Atoms/MetaTags';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Hydranet: Bringing Bitcoin to DeFi</title>
      <MetaTags />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Landing />
      <AboutSection id={'about'} />
      <ProductsSection id={'products'} />
      <RoadmapSection id={'roadmap'} />
      <ArticlesSection id={'articles'} />
    </Layout>
  </>
);

export default Home;
