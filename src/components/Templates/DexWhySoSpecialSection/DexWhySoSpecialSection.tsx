import Caption from '../../Atoms/Caption';
import DexTable from '../../../../assets/svg/dex-table-comparaison.svg';

const DexWhySoSpecialSection = () => (
  <div className="dex-section">
    <Caption hashLabel={'WHY SO SPECIAL'} title={'What is a Layer 3 DEX'} />
    <div className="mb-8 max-w-2xl text-brand-greyed md:mb-12">
      <p>
        The Hydranet DEX is a Layer 3 cross-chain DEX that utilizes Layer 2
        protocols (Lightning Network and Connext) to allow low-fee, trustless,
        cross-chain swaps between BTC, ETH, and additional altcoins all on one
        platform.
      </p>
    </div>
    <img
      src={DexTable.src}
      alt={'dex product'}
      className="mx-auto w-full max-w-6xl rounded-lg"
    />
  </div>
);

export default DexWhySoSpecialSection;
