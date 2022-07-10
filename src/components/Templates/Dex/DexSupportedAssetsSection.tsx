import Caption from '../../Atoms/Caption';
import Picture from '../../Atoms/Picture';
import { mergeClassNames } from '../../../helpers/styles';
import { ICaption } from '../../../storyblok/models/ICaption';
import { IToken } from '../../../storyblok/models/IToken';

export type DexSupportedAssetsSectionProps = {
  caption: Array<ICaption>;
  items: Array<IToken>;
};
const DexSupportedAssetsSection = ({
  caption,
  items = [],
}: DexSupportedAssetsSectionProps) => {
  return (
    <div className="dex-section lg:my-20">
      <div className="mx-auto max-w-4xl px-10 pt-6 text-center lg:pt-0">
        <Caption hashLabel={caption[0].hashLabel} title={caption[0].title} />
        <div
          className={mergeClassNames(
            'grid gap-8 md:mt-12',
            `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${items.length}`
          )}
        >
          {items.map((token) => (
            <div
              key={token.name}
              className="mx-auto w-full pt-6 sm:w-44 lg:w-56"
            >
              <div className="border-3 flow-root rounded-lg border-brand-medium-blue bg-brand-blue px-3 pb-5 shadow-lg sm:px-6 sm:pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md border border-brand-medium-blue bg-brand-blue p-3 shadow-lg">
                      <Picture
                        sources={token.picture[0].sources}
                        fallback={token.picture[0].fallback}
                        cssClasses={mergeClassNames(
                          'w-10 h-auto lg:w-12 mx-auto',
                          token.isComingSoon ? 'brightness-50' : ''
                        )}
                      />
                    </span>
                  </div>
                  <span className="mt-4 block text-sm text-brand-greyed">
                    ${token.symbol}
                  </span>
                  <h3 className="mt-1 text-base font-medium tracking-tight text-white">
                    {token.name}
                  </h3>
                  {token.isComingSoon && (
                    <p className="mt-4 text-xs uppercase text-brand-greyed">
                      Coming soon
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DexSupportedAssetsSection;
