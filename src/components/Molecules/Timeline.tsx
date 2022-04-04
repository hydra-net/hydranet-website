import TimelineItem, { TimelineItemProps } from '../Atoms/TimelineItem';

const timelineItems: Array<TimelineItemProps> = [
  {
    side: 'left',
    additionalInfo: 'Q2 2022',
    title: 'CHP launch on Cryptoken',
    body: 'Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.',
  },
  {
    side: 'right',
    additionalInfo: 'Q2 2022',
    title: 'CHP launch on Cryptoken',
    body: 'Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.',
  },
  {
    side: 'left',
    additionalInfo: 'Q2 2022',
    title: 'CHP launch on Cryptoken',
    body: 'Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.',
  },
  {
    side: 'right',
    additionalInfo: 'Q2 2022',
    title: 'CHP launch on Cryptoken',
    body: 'Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.',
  },
];
const Timeline = () => {
  return (
    <div className="mx-auto h-full w-full">
      <div className="wrap relative h-full  pl-8 md:overflow-hidden md:p-0">
        <div className="border-2-2 absolute left-0 h-full border border-brand-light-blue md:left-[50%]" />
        {timelineItems.map((item) => (
          <TimelineItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
