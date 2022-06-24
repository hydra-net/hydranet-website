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
        <div className={'flex flex-wrap items-center justify-between md:mt-12'}>
          {DEX_TRADE_ASSETS.map((token) => (
            <div
              className="relative mx-auto mt-6 w-1/3 md:mt-0 md:w-auto "
              key={token.fallBackSrc}
            >
              <Picture
                srcSets={token.srcSets}
                fallBackSrc={token.fallBackSrc}
                alt={token.alt}
                isLazy={true}
                classes={mergeClassNames(
                  token.isComingSoon ? ' brightness-50' : '',
                  'w-10 lg:w-14 mx-auto'
                )}
                placeholder={<Skeleton.Circle size={'16'} />}
              />
              <p className="mt-4 text-sm font-medium uppercase text-white">
                {token.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DexSupportedAssetsSection;
