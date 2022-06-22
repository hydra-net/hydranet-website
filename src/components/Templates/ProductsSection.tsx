import Hero from '../Molecules/Hero';
import ContentSwap from '../Molecules/ContentSwap';
import Caption from '../Atoms/Caption';
import { IAppSection } from '../../interfaces';
import Accordion from '../Molecules/Accordion';
import { SSUI_YOUTUBE_BTC_ETH, SSUI_YOUTUBE_ETH_BTC } from '../../constants';
import Link from 'next/link';

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
                Layer 1: On-chain transactions. Traditional, limited to one type
                of coin and blockchain.
              </p>
              <p className={'mt-3 font-light text-brand-greyed'}>
                Layer 2: Off-chain transactions. Nearly instant, limited to one
                type of coin and blockchain.
              </p>
              <p className={'mt-3 font-light text-brand-greyed'}>
                Layer 3: Cross-chain, off-chain transactions. Nearly instant,
                compatible with multiple types of coins, blockchain networks,
                and ecosystems.
              </p>
              <div className="mt-4 text-center">
                <p className={'mb-3 font-bold text-brand-red underline'}>
                  Please don't send real funds for using this version.
                </p>
                <p>
                  The Hydranet DEX is currently in testnet only, once we are
                  confident about everything, we will move to mainnet version
                  (TBD).
                </p>
                <div className="my-8 text-center">
                  <Link href={'/dex'}>
                    <a className="base-button primary-button text-sm uppercase">
                      Check it out
                    </a>
                  </Link>
                </div>
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
