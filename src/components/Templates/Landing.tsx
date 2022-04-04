import CoinStats from '../Molecules/CoinStats';
import Hero from '../Molecules/Hero';
import Particles from '../Atoms/Particles';

const Landing = () => {
  return (
    <Hero
      className={' bg-hydra-bg bg-cover bg-left bg-no-repeat lg:bg-center '}
    >
      <Particles />
      {/* navbar height */}
      <div className="pt-16 lg:pt-20" />

      <div className={'mx-auto max-w-xs sm:max-w-sm md:hidden'}>
        <img src={'/placeholder-1.png'} />
      </div>
      <div className={'mt-6 text-center md:mt-0'}>
        <div className={'text-md uppercase text-brand-greyed lg:text-xl'}>
          STAKING. BONDING. DECENTRALIZED GOVERNANCE.
        </div>
        <div
          className={
            'my-6 text-4xl font-bold tracking-wider text-white sm:text-5xl lg:text-8xl'
          }
        >
          HYDRANET
        </div>
        <div
          className={
            'text-xl font-semibold tracking-wider text-brand-light-blue sm:text-2xl lg:text-3xl'
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
};
export default Landing;
