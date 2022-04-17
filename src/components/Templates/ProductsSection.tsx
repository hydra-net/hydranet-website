import Hero from '../Molecules/Hero';
import ContentSwap from '../Molecules/ContentSwap';
import Caption from '../Atoms/Caption';
import Button from '../Atoms/Button';
import { IAppSection } from '../../interfaces';
// import { DEX_DOWNLOAD_LINKS } from '../../constants';

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
            src="/dex.webp"
            className="mx-auto w-full max-w-sm rounded-lg md:max-w-md lg:ml-auto lg:mr-0 lg:max-w-lg xl:max-w-3xl"
            alt={'dex picture'}
          />
        }
        bSideContent={
          <>
            <Caption hashLabel={'product'} title={'Hydra DEX - TESTNET'} />
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
              <div className="mt-8">
                <pre className={'text-center'}>Lazarus build</pre>
                <div className="mx-auto mt-4 w-48">
                  <Button disabled>
                    <span className="uppercase">Coming soon</span>
                  </Button>
                </div>
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
            src="/bridge.svg"
            className="mx-auto mr-auto w-full max-w-xs drop-shadow-xl lg:ml-0 lg:mr-auto lg:max-w-md"
            alt={'bridge product'}
          />
        }
        bSideContent={
          <>
            <Caption
              hashLabel={'product - coming soon'}
              title={'Hydra Bridge'}
            />
            <div className={'font-light text-brand-greyed'}>
              <p className={'font-light text-current'}>
                A bridge aggregator searches for the best rates on available
                bridging services and offers a route to that bridge as a
                service. It helps to ensure the best price on your transaction.
              </p>

              <p className={'mt-3 font-light text-current'}>
                Example: A user wants to bridge USDC from Ethereum to Arbitrum.
                There are multiple bridges between those functions, and the
                aggregator pings each one looking for all available bridges. The
                aggregator then gives you the options and allows you to choose
                the cheapest/fastest/preferred bridge service, and routes your
                funds through it for you.
              </p>
              <div className="mx-auto mt-8 w-48 text-center lg:ml-0">
                <Button disabled>
                  <span className="uppercase">Coming soon</span>
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
