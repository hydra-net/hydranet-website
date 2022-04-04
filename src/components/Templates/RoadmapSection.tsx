import Hero from '../Molecules/Hero';
import Caption from '../Atoms/Caption';
import Timeline from '../Molecules/Timeline';

const RoadmapSection = () => (
  <Hero
    dividerClassRef={'bg-divider-roadmap top-0  rotate-y-180'}
    className={'bg-brand-darker-blue'}
  >
    <div className={'pt-20 xl:pt-[100px]'} />
    <Caption hashLabel={'roadmap'} title={'Timeline'} />
    <Timeline />
  </Hero>
);

export default RoadmapSection;
