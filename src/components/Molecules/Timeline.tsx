import { Sides } from '../../enums';
import TimelineItem, { TimelineItemProps } from '../Atoms/TimelineItem';

const timelineItems: Array<TimelineItemProps> = [
  {
    side: 'left',
    number: 1,
    title: 'CHP launch on Cryptoken',
    body: 'Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.',
  },
  {
    side: 'right',
    number: 2,
    title: 'CHP launch on Cryptoken',
    body: 'Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.',
  },
  {
    side: 'left',
    number: 3,
    title: 'CHP launch on Cryptoken',
    body: 'Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.',
  },
  {
    side: 'right',
    number: 4,
    title: 'CHP launch on Cryptoken',
    body: 'Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.',
  },
];
const Timeline = () => {
  return (
    <div className="container mx-auto h-full w-full">
      <div className="wrap relative h-full overflow-hidden p-10">
        <div className="border-2-2 absolute left-[50%] h-full border border-brand-light-blue" />
        {timelineItems.map((item) => (
          <TimelineItem key={item.number} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
