import Layout from '../Templates/Layout';

import Container from '../Atoms/Container';
import Button from '../Atoms/Button';
import DexSupportedAssetsSection, {
  DexSupportedAssetsSectionProps,
} from '../Templates/Dex/DexSupportedAssetsSection';
import DownloadSection, {
  DexDownloadSectionProps,
} from '../Templates/Dex/DownloadSection';

import { handleScrollTo } from '../../helpers/events';

import { ILayout } from '../../storyblok/models/ILayout';

import AdvantagesSection, {
  DexAdvantagesSectionProps,
} from '../Templates/Dex/AdvantagesSection';
import WhySoSpecialSection, {
  DexWhySoSpecialSectionProps,
} from '../Templates/Dex/WhySoSpecialSection';
import PurposeSection, {
  DexPurposeSectionProps,
} from '../Templates/Dex/PurposeSection';
import CurrentLimitationsSection, {
  CurrentDexLimitationsSectionProps,
} from '../Templates/Dex/CurrentLimitationsSection';
import PictureLandingSection, {
  PictureLandingSectionSectionProps,
} from '../Templates/Landing/PictureLandingSection';

type DexPageProps = {
  blok: {
    LayoutSectionBlok: Array<ILayout>;
    LandingSectionBlok: Array<PictureLandingSectionSectionProps>;
    DownloadButtonTextBlok: string;
    AdvantagesSectionBlok: Array<DexAdvantagesSectionProps>;
    WhySoSpecialSectionBlok: Array<DexWhySoSpecialSectionProps>;
    PurposeSectionBlok: Array<DexPurposeSectionProps>;
    DexSupportedAssetsSectionBlok: Array<DexSupportedAssetsSectionProps>;
    CurrentLimitationsSectionBlok: Array<CurrentDexLimitationsSectionProps>;
    DownloadSectionBlok: Array<DexDownloadSectionProps>;
  };
};
const DexPage = ({ blok }: DexPageProps) => {
  const {
    LandingSectionBlok,
    DownloadButtonTextBlok,
    AdvantagesSectionBlok,
    WhySoSpecialSectionBlok,
    PurposeSectionBlok,
    CurrentLimitationsSectionBlok,
    DexSupportedAssetsSectionBlok,
    DownloadSectionBlok,
    LayoutSectionBlok,
  } = blok;
  return (
    <Layout {...LayoutSectionBlok[0]} footerBgClass={'bg-brand-darkest-blue'}>
      <div
        id={'dex-page'}
        className="mt-6 min-h-screen bg-hydra-bg lg:mt-20 lg:bg-brand-darker-blue"
      >
        <div className="relative overflow-hidden lg:bg-hydra-bg lg:bg-contain lg:bg-center lg:bg-no-repeat">
          <PictureLandingSection {...LandingSectionBlok[0]} />

          <div className="bg-brand-darker-blue">
            <Container size={'xl'}>
              <div className="dex-section mx-auto w-44 pt-8 md:w-56 md:pt-12 lg:w-full lg:max-w-xs">
                <Button
                  additionalClassNames={
                    'primary-button text-md lg:text-xl tracking-widest z-[8] relative'
                  }
                  onClick={() => handleScrollTo('dex_download')}
                >
                  {DownloadButtonTextBlok}
                </Button>
              </div>
              <AdvantagesSection {...AdvantagesSectionBlok[0]} />
              <WhySoSpecialSection {...WhySoSpecialSectionBlok[0]} />
              <PurposeSection {...PurposeSectionBlok[0]} />
              <CurrentLimitationsSection
                {...CurrentLimitationsSectionBlok[0]}
              />
            </Container>
            <DexSupportedAssetsSection {...DexSupportedAssetsSectionBlok[0]} />
            <Container size={'xl'}>
              <DownloadSection
                id={'dex_download'}
                {...DownloadSectionBlok[0]}
              />
            </Container>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DexPage;
