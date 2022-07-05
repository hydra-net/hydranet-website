import Layout from '../Templates/Layout';

import { ILayout } from '../../storyblok/models/ILayout';

import AboutSection, { AboutSectionProps } from '../Templates/AboutSection';
import ProductsSection, {
  ProductsSectionProps,
} from '../Templates/ProductsSection';
import RoadmapSection from '../Templates/RoadmapSection';
import ArticlesSection from '../Templates/ArticlesSection';
import BuySection from '../Templates/Dex/BuySection';
import HeroLandingSection, {
  HeroLandingSectionSectionProps,
} from '../Templates/Landing/HeroLandingSection';

type HomeProps = {
  blok: {
    LayoutSectionBlok: Array<ILayout>;
    LandingSectionBlok: Array<HeroLandingSectionSectionProps>;
    AboutSectionBlok: Array<AboutSectionProps>;
    ProductsSectionBlok: Array<ProductsSectionProps>;
    // WhySoSpecialSectionBlok: Array<DexWhySoSpecialSectionProps>;
    // PurposeSectionBlok: Array<DexPurposeSectionProps>;
    // CurrentLimitationsSectionBlok: Array<CurrentDexLimitationsSectionProps>;
    // DownloadSectionBlok: Array<DexDownloadSectionProps>;
  };
};
const Home = ({ blok }: HomeProps) => {
  const {
    LandingSectionBlok,
    AboutSectionBlok,
    ProductsSectionBlok,
    // WhySoSpecialSectionBlok,
    // PurposeSectionBlok,
    // CurrentLimitationsSectionBlok,
    // DownloadSectionBlok,
    LayoutSectionBlok,
  } = blok;
  console.log('ProductsSectionBlok', ProductsSectionBlok);
  return (
    <Layout {...LayoutSectionBlok[0]} footerBgClass={'bg-brand-darkest-blue'}>
      <HeroLandingSection {...LandingSectionBlok[0]} />
      <AboutSection id={'about'} {...AboutSectionBlok[0]} />
      <ProductsSection id={'products'} {...ProductsSectionBlok[0]} />
      <RoadmapSection id={'roadmap'} />
      <BuySection id={'buy'} />
      <ArticlesSection id={'articles'} />
    </Layout>
  );
};

export default Home;
