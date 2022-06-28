import Hero from '../Molecules/Hero';
import Particles from '../Atoms/Particles';

const Landing = () => {
  return (
    <Hero className={'bg-hydra-bg bg-cover bg-left bg-no-repeat lg:bg-center '}>
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
      <div className={'relative mt-6 overflow-hidden text-center md:mt-0 '}>
        <div
          className={'sub-title uppercase text-brand-greyed'}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          STAKING. BONDING. DECENTRALIZED GOVERNANCE.
        </div>
        <div
          className={
            'font-exo big-title my-6 font-bold tracking-wider text-white'
          }
          data-aos="zoom-in"
        >
          HYDRANET
        </div>
        <div
          className={
            'font-exo text-fill-color title bg-landing-gradient bg-clip-text font-semibold uppercase tracking-wider'
          }
          data-aos="fade-left"
          data-aos-delay="300"
        >
          Building a Layer 3 DEX, Bringing Bitcoin to DeFi
        </div>
      </div>
    </Hero>
  );
};
export default Landing;
