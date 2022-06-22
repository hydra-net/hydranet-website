import Caption from '../../Atoms/Caption';
import { DEX_TRADE_ASSETS } from './content';
import Picture from '../../Atoms/Picture';
import Skeleton from '../../Atoms/Skeleton';

const DexSupportedAssetsSection = () => {
  return (
    <div className="dex-section bg-brand-darkest-blue">
      <div className="mx-auto max-w-3xl px-10 text-center">
        <Caption hashLabel={''} title={'Supported coins'} />
        <div>
          {DEX_TRADE_ASSETS.map((token) => (
            <Picture
              srcSets={token.srcSets}
              fallBackSrc={token.fallBackSrc}
              alt={token.alt}
              isLazy={true}
              classes={'w-14'}
              placeholder={<Skeleton.Circle size={'16'} />}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DexSupportedAssetsSection;
