import Hero from '../Molecules/Hero';
import Caption from '../Atoms/Caption';
import Timeline from '../Molecules/Timeline';

import { IAppSection } from '../../interfaces';
import { ICaption } from '../../storyblok/models/ICaption';
import { IRoadmapYear, ITabHeader } from '../../storyblok/models/ITab';

export type RoadmapSectionProps = {
  caption: Array<ICaption>;
  years: Array<string>;
  yearlyRoadmaps: Array<IRoadmapYear>;
  tabHeaders: Array<ITabHeader>;
  errorTimelineMessage: string;
};
const RoadmapSection = ({
  id,
  years,
  yearlyRoadmaps,
  tabHeaders,
  errorTimelineMessage,
}: IAppSection & RoadmapSectionProps) => {
  return (
    <section id={id} className="w-full">
      <Hero
        dividerClassRef={'bg-divider-roadmap top-0  rotate-y-180'}
        className={'bg-brand-darker-blue'}
      >
        <div className={'pt-20 xl:pt-[100px]'} />
        <Caption hashLabel={'roadmap'} title={'Timeline'} />
        <Timeline
          headers={tabHeaders}
          years={years}
          yearlyRoadmaps={yearlyRoadmaps}
          errorTimelineMessage={errorTimelineMessage}
        />
      </Hero>
    </section>
  );
};

export default RoadmapSection;
