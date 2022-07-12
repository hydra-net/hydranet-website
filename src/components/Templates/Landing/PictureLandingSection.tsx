import Container from '../../Atoms/Container';
import Divider from '../../Atoms/Divider';
import Picture from '../../Atoms/Picture';

import { IMedia } from '../../../storyblok/models/IMedia';

export type PictureLandingSectionSectionProps = {
  title_upper: string;
  title_lower?: string;
  subtitle_upper: string;
  subtitle_lower?: string;
  picture: IMedia[];
};
const PictureLandingSection = ({
  title_upper,
  title_lower,
  subtitle_upper,
  subtitle_lower,
  picture,
}: PictureLandingSectionSectionProps) => (
  <>
    <div className="relative pb-8 sm:pb-12">
      <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
        <Container size={'xl'}>
          <div className="text-center">
            <h1 className="big-title font-extrabold tracking-tight text-white">
              <span className="block">{title_upper}</span>
              {title_lower && <span className="block">{title_lower}</span>}
            </h1>
            <div className=" mx-auto mt-6 max-w-md text-center text-brand-greyed md:max-w-3xl ">
              <p className="sub-title text-current">{subtitle_upper}</p>

              {subtitle_lower && (
                <p className="sub-title mt-4 text-current">{subtitle_lower}</p>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
    <div className="relative">
      <div className="absolute inset-0 flex flex-col" aria-hidden="true">
        <div className="flex-1" />
        <div className="z-1 relative hidden md:block" style={{ zIndex: '1' }}>
          <Divider dividerClassRef={'bg-divider-roadmap'} />
        </div>
        <div className="w-full flex-1 bg-brand-darker-blue" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-10 xl:max-w-7xl">
        <Picture
          sources={picture[0].sources}
          fallback={picture[0].fallback}
          cssClasses={picture[0].cssClasses}
        />
      </div>
    </div>
  </>
);

export default PictureLandingSection;
