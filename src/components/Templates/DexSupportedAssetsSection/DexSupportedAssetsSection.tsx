import Caption from '../../Atoms/Caption';
import { DEX_TRADE_ASSETS } from './content';
import Picture from '../../Atoms/Picture';
import Skeleton from '../../Atoms/Skeleton';
import { mergeClassNames } from '../../../helpers/styles';

const DexSupportedAssetsSection = () => {
  return (
    <div className="dex-section bg-brand-blue">
      <div className="mx-auto max-w-3xl px-10 pt-14 text-center lg:pt-0">
        <Caption hashLabel={''} title={'Supported coins'} />
        <div
          className={
            'mt-8 flex flex-wrap items-center justify-center space-x-6 md:space-x-10 lg:mt-12 lg:space-x-14'
          }
        >
          {DEX_TRADE_ASSETS.map((token) => (
            <div className="relative" key={token.fallBackSrc}>
              <Picture
                srcSets={token.srcSets}
                fallBackSrc={token.fallBackSrc}
                alt={token.alt}
                isLazy={true}
                classes={mergeClassNames(
                  token.isComingSoon ? ' brightness-50' : '',
                  'w-10 lg:w-14'
                )}
                placeholder={<Skeleton.Circle size={'16'} />}
              />
              <p className="mt-4 text-xs uppercase text-white">{token.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DexSupportedAssetsSection;
