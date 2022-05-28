import Hero from '../Molecules/Hero';
import ContentSwap from '../Molecules/ContentSwap';
import Caption from '../Atoms/Caption';
import { IAppSection } from '../../interfaces';
import Accordion from '../Molecules/Accordion';
import {
  DEX_DOWNLOAD_LINKS,
  SSUI_YOUTUBE_BTC_ETH,
  SSUI_YOUTUBE_ETH_BTC,
} from '../../constants';

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
          <picture>
            <source srcSet={'/dex.webp'} type={'image/webp'} />
            <source srcSet={'/dex.jpg'} type={'image/jpg'} />
            <img
              src="/dex.webp"
              alt={'dex product'}
              className="mx-auto w-full max-w-sm rounded-lg md:max-w-md lg:ml-auto lg:mr-0 lg:max-w-lg xl:max-w-3xl"
            />
          </picture>
        }
        bSideContent={
          <>
            <Caption hashLabel={'product'} title={'Hydra DEX - TESTNET'} />
            <div className={'font-light text-brand-greyed'}>
              <p className={'font-light text-brand-greyed'}>
                Layer 1: On-chain intranet work transactions. Traditional,
                limited to one coin.
              </p>
              <p className={'mt-3 font-light text-brand-greyed'}>
                Layer 2: Off-chain intranet work transactions. Nearly instant,
                limited to one coin.
              </p>
              <p className={'mt-3 font-light text-brand-greyed'}>
                Layer 3: Cross-chain internet work transactions. Nearly instant,
                compatible with multiple coins on multiple networks.
              </p>
              <div className="mt-4 md:mt-8">
                <pre className={'mb-2 text-center text-xl font-semibold'}>
                  Testnet build
                </pre>
              </div>

              <div className="mx-auto mt-3 grid w-48 grid-cols-1 sm:w-96 sm:grid-cols-2 sm:gap-8 md:w-auto md:grid-cols-2">
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
              </div>
              <div className="mt-4 text-center">
                <p>
                  The Hydranet DEX is currently in testnet only, once we are
                  confident about everything, we will move to mainnet version
                  (TBD).
                </p>
                <p className={'font-bold text-brand-red underline'}>
                  Please don't send real funds for using this version.
                </p>
              </div>
            </div>
          </>
        }
      />
      <div className="mx-auto mt-8 max-w-6xl space-y-6 lg:mt-16 lg:space-y-8">
        <Accordion
          title={'Simple Swap UI - BTC to ETH'}
          content={
            <>
              <video
                width="100%"
                autoPlay={true}
                muted
                loop
                className={'rounded-md'}
              >
                <source src={'./btc_to_eth.webm'} type={'video/webm'} />
                <source src={'./btc_to_eth.mp4'} type={'video/mp4'} />
              </video>
              <span className="mt-4 block text-right">
                <a
                  href={SSUI_YOUTUBE_BTC_ETH}
                  target={'_blank'}
                  rel="noreferrer"
                  className={
                    'text-sm font-medium text-brand-aqua hover:text-brand-light-blue'
                  }
                >
                  See on youtube
                  <i className={'fa-solid fa-external-link ml-1'} />
                </a>
              </span>
            </>
          }
        />
        <Accordion
          title={'Simple Swap UI - ETH to BTC'}
          content={
            <>
              <video
                width="100%"
                autoPlay={true}
                muted
                loop
                className={'block rounded-md'}
              >
                <source src={'./eth_to_btc.webm'} type={'video/webm'} />
                <source src={'./eth_to_btc.mp4'} type={'video/mp4'} />
              </video>
              <span className="mt-4 block text-right">
                <a
                  href={SSUI_YOUTUBE_ETH_BTC}
                  target={'_blank'}
                  rel="noreferrer"
                  className={
                    'text-sm font-medium text-brand-aqua hover:text-brand-light-blue'
                  }
                >
                  See on youtube
                  <i className={'fa-solid fa-external-link ml-1'} />
                </a>
              </span>
            </>
          }
        />
      </div>
    </Hero>
  </section>
);
export default ProductsSection;
