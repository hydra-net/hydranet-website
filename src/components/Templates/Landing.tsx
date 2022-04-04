import CoinStats from '../Molecules/CoinStats';
import Hero from '../Molecules/Hero';
import { IAppSection } from '../../interfaces';

const Landing = () => (
  <Hero
    className={
      'flex flex-col justify-center bg-hydra-bg bg-cover bg-left bg-no-repeat p-10 lg:bg-center '
    }
  >
    {/* navbar height */}
    <div className="pt-16 lg:pt-24" />

    <div className={'mx-auto max-w-xs sm:max-w-sm md:hidden'}>
      <img src={'/placeholder-1.png'} />
    </div>
    <div className={'mt-6 text-center md:mt-0'}>
      <div className={'text-md uppercase text-brand-greyed lg:text-xl'}>
        STAKING. BONDING. DECENTRALIZED GOVERNANCE.
      </div>
      <div
        className={
          'my-6 text-5xl font-bold tracking-wider text-white lg:text-8xl'
        }
      >
        HYDRANET
      </div>
      <div
        className={
          'text-2xl font-semibold tracking-wider text-brand-light-blue lg:text-3xl'
        }
      >
        ABSTRACTIVE INTEROPERABILITY
      </div>
    </div>
    <div className="mx-auto mt-10 w-full lg:mt-20">
      <CoinStats />
    </div>
  </Hero>
);

export default Landing;
