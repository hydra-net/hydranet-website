import Caption from '../../Atoms/Caption';
import { IParagraph } from '../../../storyblok/models/IParagraph';
import { ICaption } from '../../../storyblok/models/ICaption';
import { IPicture } from '../../../storyblok/models/IPicture';
import { ILimitation } from '../../../storyblok/models/ILimitation';
import { mergeClassNames } from '../../../helpers/styles';
import Picture from '../../Atoms/Picture';

export type CurrentDexLimitationsSectionProps = {
  body: Array<IParagraph>;
  caption: Array<ICaption>;
  picture: Array<IPicture>;
  limitations: Array<ILimitation>;
};
const CurrentDexLimitationsSection = ({
  body,
  caption,
  picture,
  limitations,
}: CurrentDexLimitationsSectionProps) => {
  return (
    <div className="dex-section">
      <div className="relative bg-brand-darker-blue">
        <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
          <div className="hidden h-full w-full xl:grid xl:grid-cols-2">
            <div className="flex h-full items-center justify-center xl:relative xl:col-start-2">
              <div className="ml-auto w-full max-w-md">
                <Picture
                  sources={picture[0].sources}
                  fallback={picture[0].fallback}
                  cssClasses={'w-full'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-4xl lg:max-w-7xl xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
          <div className="relative xl:col-start-1 xl:pb-0">
            <Caption
              hashLabel={caption[0].hashLabel}
              title={caption[0].title}
            />
            {body.map((paragraph, index) => (
              <p
                key={paragraph._uid}
                className={mergeClassNames(
                  index === 0 ? 'mt-5' : 'mt-2',
                  'text-brand-greyed'
                )}
              >
                {paragraph.content}
              </p>
            ))}
            <div className="mt-12 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 sm:gap-y-12">
              {limitations.map((item) => (
                <p key={item._uid}>
                  <span className="sub-title block font-bold text-white">
                    {item.title}
                  </span>
                  <span className="paragraph mt-1 block text-base text-brand-greyed">
                    <span className="paragraph font-medium text-white">
                      {item.emphasis}
                    </span>{' '}
                    {item.description}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentDexLimitationsSection;
