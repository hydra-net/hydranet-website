import type { NextPage } from 'next';

import CurrentDexLimitations from '../src/components/Templates/CurrentDexLimitations/CurrentDexLimitations';
import DexAdvantages from '../src/components/Templates/DexAdvantages/DexAdvantages';
import DexDownload from '../src/components/Templates/DexDownload';
import DexPurpose from '../src/components/Templates/DexPurpose/DexPurpose';
import Container from '../src/components/Atoms/Container';
import Caption from '../src/components/Atoms/Caption';

import DexTable from '../assets/svg/dex-table-comparaison.svg';
import Button from '../src/components/Atoms/Button';

const Dex: NextPage = () => (
  <div id={'dex-page'} className="min-h-screen bg-brand-darker-blue">
    <div className="relative overflow-hidden bg-brand-darkest-blue">
      <div className="relative pb-16 sm:pb-12">
        <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
          <Container size={'xl'}>
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">FIRST WORLDWIDE DEX</span>
                <span className="block">THAT PROVIDE NATIVE SWAPS</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-brand-greyed sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
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
            <Button additionalClassNames={'text-md lg:text-xl tracking-widest'}>
              Download
            </Button>
          </div>
          <div className="dex-section">
            <DexAdvantages />
          </div>
          <div className="dex-section">
            <Caption
              hashLabel={'WHY SO SPECIAL'}
              title={'What is a Layer 3 DEX'}
            />
            <div className="mb-8 max-w-2xl text-brand-greyed md:mb-12">
              <p>
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                senectus vitae.
              </p>
            </div>
            <img
              src={DexTable.src}
              alt={'dex product'}
              className="mx-auto w-full max-w-6xl rounded-lg"
            />
          </div>
          <div className="dex-section">
            <DexPurpose />
          </div>
          <div className="dex-section">
            <CurrentDexLimitations />
          </div>
          <div className="dex-section">
            <DexDownload />
          </div>
        </Container>
      </div>
    </div>
  </div>
);

export default Dex;
