import type { NextPage } from 'next';

import CurrentDexLimitationsSection from '../../src/components/Templates/CurrentDexLimitationsSection/CurrentDexLimitationsSection';
import DexAdvantagesSection from '../../src/components/Templates/DexAdvantagesSection/DexAdvantagesSection';
import DexDownloadSection from '../../src/components/Templates/DexDownloadSection';
import DexPurposeSection from '../../src/components/Templates/DexPurposeSection/DexPurposeSection';
import DexWhySoSpecialSection from '../../src/components/Templates/DexWhySoSpecialSection/DexWhySoSpecialSection';

import Container from '../../src/components/Atoms/Container';
import Button from '../../src/components/Atoms/Button';
import { handleScrollTo } from '../../src/helpers/events';
import DexSupportedAssetsSection from '../../src/components/Templates/DexSupportedAssetsSection/DexSupportedAssetsSection';
import Divider from '../../src/components/Atoms/Divider';
import { DEX_NAVIGATION } from '../../src/components/Molecules/Navbar/content';
import Layout from '../../src/components/Templates/Layout';

const Index: NextPage = () => (
  <Layout navigation={DEX_NAVIGATION} footerBgClass={'bg-brand-darkest-blue'}>
    <div
      id={'dex-page'}
      className="min-h-screen bg-hydra-bg lg:bg-brand-darker-blue"
    >
      <div className="relative overflow-hidden lg:bg-hydra-bg lg:bg-contain lg:bg-center lg:bg-no-repeat">
        <div className="relative pb-8 sm:pb-12">
          <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
            <Container size={'xl'}>
              <div className="text-center">
                <h1 className="big-title font-extrabold tracking-tight text-white">
                  <span className="block">FIRST WORLDWIDE DEX</span>
                  <span className="block"> THAT PROVIDES NATIVE SWAPS</span>
                </h1>
                <div className=" mx-auto mt-6 max-w-md text-center text-brand-greyed md:max-w-3xl ">
                  <p className="sub-title text-current">
                    Currently, the blockchain industry is struggling to cope
                    with heavily congested networks, causing transaction/gas
                    fees to rise to astronomical levels and making trading very
                    expensive.
                  </p>

                  <p className="sub-title mt-4 text-current">
                    This is where Hydranet offers a solution. The Hydranet DEX
                    combines the strengths of Bitcoin & Lightning Network with
                    ideas of its own.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div
              className="z-1 relative hidden md:block"
              style={{ zIndex: '1' }}
            >
              <Divider dividerClassRef={'bg-divider-roadmap'} />
            </div>
            <div className="w-full flex-1 bg-brand-darker-blue" />
          </div>

          <div className="mx-auto max-w-4xl px-4 sm:px-10 xl:max-w-7xl">
            <picture>
              <source srcSet={'/dex.webp'} type={'image/webp'} />
              <source srcSet={'/dex.jpg'} type={'image/jpg'} />
              <img
                src="/dex.webp"
                alt={'dex product'}
                className={'relative z-[5] rounded-lg drop-shadow-md'}
              />
            </picture>
          </div>
        </div>

        <div className="bg-brand-darker-blue">
          <Container size={'xl'}>
            <div className="dex-section mx-auto w-44 pt-8 md:w-56 md:pt-12 lg:w-full lg:max-w-xs">
              <Button
                additionalClassNames={
                  'primary-button text-md lg:text-xl tracking-widest z-[8] relative'
                }
                onClick={() => handleScrollTo('dex_download')}
              >
                Download
              </Button>
            </div>
            <DexAdvantagesSection />
            <DexWhySoSpecialSection />
            <DexPurposeSection />
            <CurrentDexLimitationsSection />
          </Container>
          <DexSupportedAssetsSection />
          <Container size={'xl'}>
            <DexDownloadSection id={'dex_download'} />
          </Container>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
