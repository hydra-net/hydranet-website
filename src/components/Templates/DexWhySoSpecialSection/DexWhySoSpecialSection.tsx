import Caption from '../../Atoms/Caption';
import Table from '../../Molecules/Table/Table';
import { DEX_COMPARISON_HEADERS, DEX_COMPARISON_ROWS } from './content';

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
    <Table headers={DEX_COMPARISON_HEADERS} rows={DEX_COMPARISON_ROWS} />
  </div>
);

export default DexWhySoSpecialSection;
