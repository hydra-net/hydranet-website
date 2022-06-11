import Caption from '../../Atoms/Caption';
import DexTable from '../../../../assets/svg/dex-table-comparaison.svg';

const DexWhySoSpecialSection = () => (
  <div className="dex-section">
    <Caption hashLabel={'WHY SO SPECIAL'} title={'What is a Layer 3 DEX'} />
    <div className="mb-8 max-w-2xl text-brand-greyed md:mb-12">
      <p>
        Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna
        sed consectetur neque tristique pellentesque. Blandit amet, sed aenean
        erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor
        vitae ut. Amet vitae fames senectus vitae.
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
