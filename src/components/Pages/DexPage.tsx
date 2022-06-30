import Layout from '../Templates/Layout';
import DexLandingSection, {
  DexLandingSectionProps,
} from '../Templates/DexLanding/DexLandingSection';
import Container from '../Atoms/Container';
import Button from '../Atoms/Button';
import { handleScrollTo } from '../../helpers/events';
import DexAdvantagesSection, {
  DexAdvantagesSectionProps,
} from '../Templates/DexAdvantagesSection/DexAdvantagesSection';
import DexWhySoSpecialSection, {
  DexWhySoSpecialSectionProps,
} from '../Templates/DexWhySoSpecialSection/DexWhySoSpecialSection';
import DexPurposeSection, {
  DexPurposeSectionProps,
} from '../Templates/DexPurposeSection/DexPurposeSection';
import CurrentDexLimitationsSection, {
  CurrentDexLimitationsSectionProps,
} from '../Templates/CurrentDexLimitationsSection/CurrentDexLimitationsSection';
import DexSupportedAssetsSection from '../Templates/DexSupportedAssetsSection/DexSupportedAssetsSection';
import DexDownloadSection, {
  DexDownloadSectionProps,
} from '../Templates/DexDownloadSection';
import { ILayout } from '../../storyblok/models/ILayout';

type DexPageProps = {
  blok: {
    LayoutSection: Array<ILayout>;
    LandingSection: Array<DexLandingSectionProps>;
    DownloadButtonText: string;
    AdvantagesSection: Array<DexAdvantagesSectionProps>;
    WhySoSpecialSection: Array<DexWhySoSpecialSectionProps>;
    PurposeSection: Array<DexPurposeSectionProps>;
    CurrentLimitationsSection: Array<CurrentDexLimitationsSectionProps>;
    DownloadSection: Array<DexDownloadSectionProps>;
  };
};
const DexPage = ({ blok }: DexPageProps) => {
  const {
    LandingSection,
    DownloadButtonText,
    AdvantagesSection,
    WhySoSpecialSection,
    PurposeSection,
    CurrentLimitationsSection,
    DownloadSection,
    LayoutSection,
  } = blok;
  return (
    <Layout {...LayoutSection[0]} footerBgClass={'bg-brand-darkest-blue'}>
      <div
        id={'dex-page'}
        className="mt-6 min-h-screen bg-hydra-bg lg:mt-20 lg:bg-brand-darker-blue"
      >
        <div className="relative overflow-hidden lg:bg-hydra-bg lg:bg-contain lg:bg-center lg:bg-no-repeat">
          <DexLandingSection {...LandingSection[0]} />

          <div className="bg-brand-darker-blue">
            <Container size={'xl'}>
              <div className="dex-section mx-auto w-44 pt-8 md:w-56 md:pt-12 lg:w-full lg:max-w-xs">
                <Button
                  additionalClassNames={
                    'primary-button text-md lg:text-xl tracking-widest z-[8] relative'
                  }
                  onClick={() => handleScrollTo('dex_download')}
                >
                  {DownloadButtonText}
                </Button>
              </div>
              <DexAdvantagesSection
                title={AdvantagesSection[0].title}
                subtitle={AdvantagesSection[0].subtitle}
                items={AdvantagesSection[0].items}
              />
              <DexWhySoSpecialSection {...WhySoSpecialSection[0]} />
              <DexPurposeSection {...PurposeSection[0]} />
              <CurrentDexLimitationsSection {...CurrentLimitationsSection[0]} />
            </Container>
            <DexSupportedAssetsSection />
            <Container size={'xl'}>
              <DexDownloadSection id={'dex_download'} {...DownloadSection[0]} />
            </Container>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DexPage;
