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

      <div
        className={
          'relative mx-auto mb-6 -mt-6 w-24 max-w-xs text-center sm:max-w-sm md:w-32 lg:mb-12 lg:-mt-12 lg:w-36'
        }
        data-aos="zoom-in"
      >
        <picture>
          <source srcSet={'/hydranet-logo.svg'} type={'image/svg+xml'} />
          <source srcSet={'/hydranet-logo.png'} type={'image/png'} />
          <img
            src={'/hydranet-logo.png'}
            alt={'hydranet logo'}
            className={'mx-auto w-full'}
          />
        </picture>
      </div>
      <div className={'relative mt-6 overflow-x-hidden text-center md:mt-0 '}>
        <div
          className={'text-md uppercase text-brand-greyed lg:text-xl'}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          STAKING. BONDING. DECENTRALIZED GOVERNANCE.
        </div>
        <div
          className={
            'font-exo my-6 text-4xl font-bold tracking-wider text-white sm:text-5xl lg:text-8xl'
          }
          data-aos="zoom-in"
        >
          HYDRANET
        </div>
        <div
          className={
            'font-exo text-fill-color bg-landing-gradient bg-clip-text text-xl font-semibold tracking-wider sm:text-2xl lg:text-3xl'
          }
          data-aos="fade-left"
          data-aos-delay="300"
        >
          ABSTRACTIVE INTEROPERABILITY
        </div>
      </div>
      {/*Coins stats disabled for now until we are listed on CMC or Coin Gecko*/}
      {/*<div*/}
      {/*  className="relative mx-auto mt-10 w-full lg:mt-20"*/}
      {/*  data-aos="fade-up"*/}
      {/*  data-aos-delay="600"*/}
      {/*>*/}
      {/*  <CoinStats />*/}
      {/*</div>*/}
    </Hero>
  );
};
export default Landing;
