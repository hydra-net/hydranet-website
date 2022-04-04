import Hero from '../Molecules/Hero';
import ContentSwap from '../Molecules/ContentSwap';
import Caption from '../Atoms/Caption';
import Button from '../Atoms/Button';
import { IAppSection } from '../../interfaces';

const ProductsSection = ({ id }: IAppSection) => (
  <section id={id} className="w-full">
    <Hero
      dividerClassRef={'bg-divider-dex top-0 transform rotate-y-180'}
      className={'bg-brand-darkest-blue'}
    >
      <div className={'pt-20 xl:pt-[100px]'} />
      {/* DEX */}
      <ContentSwap
        side={'right'}
        aSideContent={
          <img
            src="/dex.png"
            className="mx-auto w-full max-w-sm md:max-w-md lg:ml-auto lg:mr-0 lg:max-w-lg xl:max-w-3xl"
          />
        }
        bSideContent={
          <>
            <Caption hashLabel={'product'} title={'Hydra DEX'} />
            <div className={'font-light text-brand-greyed'}>
              <p className={'font-light text-current'}>
                Layer 1: On-chain intranet work transactions. Traditional,
                limited to one coin.
              </p>
              <p className={'mt-3 font-light text-current'}>
                Layer 2: Off-chain intranet work transactions. Nearly instant,
                limited to one coin.
              </p>
              <p className={'mt-3 font-light text-current'}>
                Layer 3: Cross-chain internet work transactions. Nearly instant,
                compatible with multiple coins on multiple networks.
              </p>
              <div className="mt-8 text-center uppercase ">
                <pre>Lazarus build</pre>
              </div>
              <div className="mx-auto mt-3 grid w-48 grid-cols-1 gap-8 sm:w-auto sm:grid-cols-3 md:grid-cols-3">
                <Button>
                  <span className="flex items-center justify-center space-x-3">
                    <img src={'./windows.svg'} className={'w-6'} />
                    <p>Windows</p>
                  </span>
                </Button>
                <Button>
                  <span className="mx-auto flex items-center justify-center space-x-3">
                    <img src={'./linux.svg'} className={'w-6'} />
                    <p>Linux</p>
                  </span>
                </Button>
                <Button>
                  <span className="flex items-center justify-center space-x-3">
                    <img src={'./apple.svg'} className={'w-6'} />
                    <p>MacOs</p>
                  </span>
                </Button>
              </div>
            </div>
          </>
        }
      />

      <div className="my-12 border border-brand-blue lg:my-20 lg:border-transparent" />
      {/* BRIDGE */}
      <ContentSwap
        side={'left'}
        aSideContent={
          <img
            src="/bridge.png"
            className="mx-auto mr-auto w-full max-w-xs drop-shadow-xl lg:ml-0 lg:mr-auto lg:max-w-sm"
          />
        }
        bSideContent={
          <>
            <Caption hashLabel={'product'} title={'Hydra Bridge'} />
            <div className={'font-light text-brand-greyed'}>
              <p className={'font-light text-current'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>

              <p className={'mt-3 font-light text-current'}>
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fu
              </p>
              <div className="mt-8 w-48 text-center ">
                <Button>
                  <span className="uppercase">bridge</span>
                </Button>
              </div>
            </div>
          </>
        }
      />
    </Hero>
  </section>
);
export default ProductsSection;
