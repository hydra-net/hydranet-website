import Layout from '../Templates/Layout';

import { ILayout } from '../../storyblok/models/ILayout';

import AboutSection, { AboutSectionProps } from '../Templates/AboutSection';
import ProductsSection, {
  ProductsSectionProps,
} from '../Templates/ProductsSection';
import RoadmapSection, {
  RoadmapSectionProps,
} from '../Templates/RoadmapSection';
import ArticlesSection, {
  ArticlesSectionProps,
} from '../Templates/ArticlesSection';
import BuySection, { BuySectionProps } from '../Templates/BuySection';
import HeroLandingSection, {
  HeroLandingSectionSectionProps,
} from '../Templates/Landing/HeroLandingSection';
import { IArticle } from '../../storyblok/models/IArticle';

type HomeProps = {
  blok: {
    LayoutSectionBlok: Array<ILayout>;
    LandingSectionBlok: Array<HeroLandingSectionSectionProps>;
    AboutSectionBlok: Array<AboutSectionProps>;
    ProductsSectionBlok: Array<ProductsSectionProps>;
    RoadmapSectionBlok: Array<RoadmapSectionProps>;
    BuySectionBlok: Array<BuySectionProps>;
    ArticlesSectionBlok: Array<ArticlesSectionProps>;
  };
  articles: Array<IArticle>;
};
const Home = ({ blok, articles }: HomeProps) => {
  const {
    LandingSectionBlok,
    AboutSectionBlok,
    ProductsSectionBlok,
    BuySectionBlok,
    RoadmapSectionBlok,
    LayoutSectionBlok,
    ArticlesSectionBlok,
  } = blok;

  return (
    <Layout {...LayoutSectionBlok[0]} footerBgClass={'bg-brand-darkest-blue'}>
      <HeroLandingSection {...LandingSectionBlok[0]} />
      <AboutSection id={'about'} {...AboutSectionBlok[0]} />
      <ProductsSection id={'products'} {...ProductsSectionBlok[0]} />
      <RoadmapSection id={'roadmap'} {...RoadmapSectionBlok[0]} />
      <BuySection id={'buy'} {...BuySectionBlok[0]} />
      <ArticlesSection
        id={'articles'}
        {...ArticlesSectionBlok[0]}
        articles={articles}
      />
    </Layout>
  );
};

export default Home;
