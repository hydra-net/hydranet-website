import Hero from '../Molecules/Hero';
import ContentSwap from '../Molecules/ContentSwap';
import Caption from '../Atoms/Caption';

import { IAppSection } from '../../interfaces';
import { ICaption } from '../../storyblok/models/ICaption';
import { IParagraph } from '../../storyblok/models/IParagraph';
import { IMedia } from '../../storyblok/models/IMedia';
import { mergeClassNames } from '../../helpers/styles';
import Picture from '../Atoms/Picture';

export type AboutSectionProps = {
  caption: Array<ICaption>;
  body: Array<IParagraph>;
  picture: Array<IMedia>;
};
const AboutSection = ({
  id,
  caption,
  body,
  picture,
}: IAppSection & AboutSectionProps) => {
  return (
    <section id={id} className="w-full">
      <Hero
        dividerClassRef={'bg-divider-about top-0'}
        className={'bg-brand-medium-blue'}
      >
        <div className={'pt-20 xl:pt-[100px]'} />
        <ContentSwap
          aSideContent={
            <Picture
              sources={picture[0].sources}
              fallback={picture[0].fallback}
              cssClasses={
                picture[0].cssClasses ||
                'mx-auto mr-auto w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'
              }
            />
          }
          bSideContent={
            <>
              <Caption
                hashLabel={caption[0].hashLabel}
                title={caption[0].title}
              />
              <div className={'paragraph font-light text-brand-greyed'}>
                {body.map((paragraph, index) => (
                  <p
                    key={paragraph._uid}
                    className={mergeClassNames(
                      paragraph.cssClasses || '',
                      index !== 0 ? 'spaced' : ''
                    )}
                  >
                    {paragraph.content}
                  </p>
                ))}
              </div>
            </>
          }
        />
      </Hero>
    </section>
  );
};

export default AboutSection;
