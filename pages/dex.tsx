import type { NextPage } from 'next';

import CurrentDexLimitations from '../src/components/Templates/CurrentDexLimitations/CurrentDexLimitations';
import DexAdvantages from '../src/components/Templates/DexAdvantages/DexAdvantages';
import DexDownload from '../src/components/Templates/DexDownload';
import DexPurpose from '../src/components/Templates/DexPurpose/DexPurpose';
import Container from '../src/components/Atoms/Container';
import Caption from '../src/components/Atoms/Caption';

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
          <div className="pb-14 lg:py-20">
            <DexDownload />
          </div>
          <div className="pb-14 lg:pt-0 lg:pb-20">
            <DexAdvantages />
          </div>
          <div className="pb-14 lg:py-20">
            <Caption
              hashLabel={'WHY SO SPECIAL'}
              title={'What is a Layer 3 DEX'}
            />
            <img
              src="/table-layer-comparaison-test.jpg"
              alt={'dex product'}
              className="mx-auto w-full max-w-6xl rounded-lg"
            />
          </div>
          <div className="pb-14 lg:py-20">
            <DexPurpose />
          </div>
          <div className="pb-14 lg:py-20">
            <CurrentDexLimitations />
          </div>
        </Container>
      </div>
    </div>
  </div>
);

export default Dex;
