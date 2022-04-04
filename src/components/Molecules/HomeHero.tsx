import { UNISWAP_BUY_LINK } from '../../constants';
import Button from '../Atoms/Button';
import CoinStats from './CoinStats';

const HomeHero = () => {
  return (
    <section
      className={
        'flex flex-col justify-center bg-cover bg-left bg-no-repeat p-10 lg:bg-center'
      }
      style={{ backgroundImage: 'url(/hydra-bg.png)' }}
    >
      <div className={'mx-auto max-w-xs sm:max-w-sm md:hidden'}>
        <img src={'/placeholder-1.png'} />
      </div>
      <div className={'mt-6 text-center md:mt-0'}>
        <div className={'text-md uppercase  text-brand-greyed'}>
          STAKING. BONDING. DECENTRALIZED GOVERNANCE.
        </div>
        <div className={'my-6 text-5xl font-bold text-white'}>HYDRANET</div>
        <div className={'text-2xl font-semibold text-brand-light-blue '}>
          ABSTRACTIVE INTEROPERABILITY
        </div>
        <div className="mx-auto mt-6 max-w-[10rem]">
          <Button onClick={() => window.open(UNISWAP_BUY_LINK, '_blank')}>
            <span className="uppercase">BUY</span>
          </Button>
        </div>
      </div>
      <div className="mt-10 lg:mt-20">
        <CoinStats />
      </div>
    </section>
  );
};
export default HomeHero;
