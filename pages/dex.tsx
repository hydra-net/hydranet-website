import type { NextPage } from 'next';
import Content1 from '../src/components/unshapped/Content1';
import Content2 from '../src/components/unshapped/Content2';
import DownloadDex from '../src/components/unshapped/DownloadDex';
import Container from '../src/components/Atoms/Container';
import CurrentFacts from '../src/components/unshapped/CurrentFacts';

const Dex: NextPage = () => (
  <div className="min-h-screen bg-brand-darker-blue">
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
        <div className="mx-auto  max-w-5xl px-4 sm:px-10 xl:max-w-7xl">
          <picture>
            <source srcSet={'/dex.webp'} type={'image/webp'} />
            <source srcSet={'/dex.jpg'} type={'image/jpg'} />
            <img
              src="/dex.webp"
              alt={'dex product'}
              className={'relative rounded-lg drop-shadow-xl'}
            />
          </picture>
        </div>
      </div>

      {/* TRY */}
      <div className="bg-brand-darker-blue">
        <Container size={'xl'}>
          <div className="py-12 lg:py-20">
            <DownloadDex />
          </div>
          <div className="py-12 lg:pt-0 lg:pb-20">
            <CurrentFacts />
          </div>
          <div className="py-12 lg:py-20">
            <Content1 />
          </div>
          <div className="py-12 lg:py-20">
            <Content2 />
          </div>
        </Container>
      </div>
    </div>
  </div>
);

export default Dex;
