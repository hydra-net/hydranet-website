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
    <div className="container mx-auto h-full w-full">
      <div className="wrap relative h-full p-10 lg:overflow-hidden">
        <div className="border-2-2 absolute left-0 h-full border border-brand-light-blue lg:left-[50%]" />
        {timelineItems.map((item) => (
          <TimelineItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
