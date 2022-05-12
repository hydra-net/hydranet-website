import Hero from '../Molecules/Hero';
import ContentSwap from '../Molecules/ContentSwap';
import Caption from '../Atoms/Caption';

import { IAppSection } from '../../interfaces';

const AboutSection = ({ id }: IAppSection) => (
  <section id={id} className="w-full">
    <Hero
      dividerClassRef={'bg-divider-about top-0'}
      className={'bg-brand-medium-blue'}
    >
      <div className={'pt-20 xl:pt-[100px]'} />
      <ContentSwap
        aSideContent={
          <img
            src="/about-hydra.png"
            className="mx-auto mr-auto w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            alt={'about hydranet'}
          />
        }
        bSideContent={
          <>
            <Caption
              hashLabel={'About Us'}
              title={'What is Hydranet?'}
            />
            <div className={'font-light text-brand-greyed'}>
              <p className={'font-light text-current'}>
                Hydranet DAO is an organisation focused on developing 
                abstractive interoperability, making fundamentally incompatible
                decentralized crypto networks such as Bitcoin and Ethereum,
                communicate using Layer 3 abstractions by implementing EVM-centric
                smart contracts utilising state channels and Bitcoin/UTXO-based
                off-chain protocols like the Lightning Network.
              </p>
              <p className={'mt-3 font-light text-current'}>
                HDX is an Arbitrum token based on the (3,3) Protocol-owned
                Liquidity model pioneered by OlympusDAO.
              </p>
              <p className={'mt-3 font-light text-current'}>
                HDX rewards are generated via staking HDX in a smart contract.
                Purchasing bonds, funds development of the protocol as well as
                to provide liquidity. HDX will serve as the meta-token for our
                Layer 3 DEX, it being the recipient of the fees accrued from
                trading and DeFi services.
              </p>
            </div>
          </>
        }
      />
    </Hero>
  </section>
);

export default AboutSection;
