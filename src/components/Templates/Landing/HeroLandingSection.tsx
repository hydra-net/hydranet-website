import Hero from '../../Molecules/Hero';
import Particles from '../../Atoms/Particles';
import { IMedia } from '../../../storyblok/models/IMedia';
import Picture from '../../Atoms/Picture';

export type HeroLandingSectionSectionProps = {
  upper_title: string;
  title: string;
  subtitle: string;
  picture: IMedia[];
};
const HeroLandingSection = ({
  upper_title,
  title,
  subtitle,
  picture,
}: HeroLandingSectionSectionProps) => {
  return (
    <Hero className={'bg-hydra-bg bg-cover bg-left bg-no-repeat lg:bg-center '}>
      <Particles />
      {/* navbar height */}
      <div className="pt-16 lg:pt-20" />

      <div
        className={
          'relative mx-auto mb-6 -mt-6 w-24 max-w-xs text-center sm:max-w-sm md:w-32 lg:mb-12 lg:-mt-12 lg:w-36'
        }
        data-aos="zoom-in"
      >
        <Picture
          sources={picture[0].sources}
          fallback={picture[0].fallback}
          cssClasses={picture[0].cssClasses || 'mx-auto w-full'}
        />
      </div>
      <div className={'relative mt-6 overflow-hidden text-center md:mt-0 '}>
        <div
          className={'sub-title uppercase text-brand-greyed'}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          {upper_title}
        </div>
        <div
          className={
            'font-exo big-title my-6 font-bold tracking-wider text-white'
          }
          data-aos="zoom-in"
        >
          {title}
        </div>
        <div
          className={
            'font-exo text-fill-color title bg-landing-gradient bg-clip-text font-semibold uppercase tracking-wider'
          }
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {subtitle}
        </div>
      </div>
    </Hero>
  );
};
export default HeroLandingSection;
