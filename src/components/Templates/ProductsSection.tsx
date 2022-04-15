import Hero from '../Molecules/Hero';
import ContentSwap from '../Molecules/ContentSwap';
import Caption from '../Atoms/Caption';
import Button from '../Atoms/Button';
import { IAppSection } from '../../interfaces';
import { DEX_DOWNLOAD_LINKS } from '../../constants';

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
            className="mx-auto w-full max-w-sm md:max-w-md lg:ml-auto lg:mr-0 lg:max-w-lg xl:max-w-3xl"
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
                <p>
                  The Hydranet DEX is currently in testnet only, once we are
                  confident about everything, we will move to mainnet version
                  (TBD).
                </p>
                <p>
                  <strong>
                    Please don't send real funds for using this version.
                  </strong>
                </p>
                <p> You can claim faucets here: LINK.</p>
              </div>
              <div className="mx-auto mt-3 grid w-48 grid-cols-1 sm:w-auto sm:grid-cols-3 md:grid-cols-3 md:gap-8">
                <a
                  href={DEX_DOWNLOAD_LINKS.windows}
                  target={'_blank'}
                  className={'primary-button m-3'}
                  rel="noreferrer"
                >
                  <span className="flex items-center justify-center space-x-3">
                    <img
                      src={'./windows.svg'}
                      className={'w-6'}
                      alt={'windows distribution'}
                    />
                    <p>Windows</p>
                  </span>
                </a>
                <a
                  href={DEX_DOWNLOAD_LINKS.linux}
                  target={'_blank'}
                  className={'primary-button m-3'}
                  rel="noreferrer"
                >
                  <span className="mx-auto flex items-center justify-center space-x-3">
                    <img
                      src={'./linux.svg'}
                      className={'w-6'}
                      alt={'linux distribution'}
                    />
                    <p>Linux</p>
                  </span>
                </a>
                <a
                  href={DEX_DOWNLOAD_LINKS.linux}
                  target={'_blank'}
                  className={'primary-button m-3'}
                  rel="noreferrer"
                >
                  <span className="flex items-center justify-center space-x-3">
                    <img
                      src={'./apple.svg'}
                      className={'w-6'}
                      alt={'macos distribution'}
                    />
                    <p>MacOs</p>
                  </span>
                </a>
              </div>
              <div className="mt-4">
                <span className="font-bold">MacOS users:</span> please be aware
                on arm m1 CPUs the lightning lnd will be executed through the
                emulation layer because it's compiled for x86 architecture,
                which can lead to lnd issues.
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
