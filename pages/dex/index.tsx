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
import Link from 'next/link';
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import BrandFooter from '../../src/components/Molecules/BrandFooter';

const Index: NextPage = () => (
  <div
    id={'dex-page'}
    className="min-h-screen bg-hydra-bg lg:bg-brand-darker-blue"
  >
    <div className="relative overflow-hidden lg:bg-hydra-bg lg:bg-contain lg:bg-top lg:bg-no-repeat">
      <div className="mr-auto mt-6 px-10">
        <Link href={'/'}>
          <a className={'nav-link nav-link--anchor'}>
            <ArrowNarrowLeftIcon className={'inline-block w-6'} />
            <span className="ml-1">Back to home</span>
          </a>
        </Link>
      </div>
      <div className="relative pb-16 sm:pb-12">
        <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
          <Container size={'xl'}>
            <div className="text-center">
              <h1 className="big-title font-extrabold tracking-tight text-white">
                <span className="block">FIRST WORLDWIDE DEX</span>
                <span className="block"> THAT PROVIDES NATIVE SWAPS</span>
              </h1>
              <div className=" mx-auto mt-6 max-w-md text-center text-brand-greyed md:max-w-3xl ">
                <p className="sub-title text-current">
                  Currently, the blockchain industry is struggling to cope with
                  heavily congested networks, causing transaction/gas fees to
                  rise to astronomical levels and making trading very expensive.
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
          <div className="w-full flex-1 bg-brand-darker-blue" />
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-10 xl:max-w-7xl">
          <picture>
            <source srcSet={'/dex.webp'} type={'image/webp'} />
            <source srcSet={'/dex.jpg'} type={'image/jpg'} />
            <img
              src="/dex.webp"
              alt={'dex product'}
              className={'relative rounded-lg drop-shadow-md'}
            />
          </picture>
        </div>
      </div>

      <div className="bg-brand-darker-blue">
        <Container size={'xl'}>
          <div className="dex-section mx-auto w-44 pt-8 md:w-56 md:pt-12 lg:w-full lg:max-w-xs">
            <Button
              additionalClassNames={
                'primary-button text-md lg:text-xl tracking-widest'
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
    <div className="bg-brand-darkest-blue">
      <BrandFooter />
    </div>
  </div>
);

export default Index;
