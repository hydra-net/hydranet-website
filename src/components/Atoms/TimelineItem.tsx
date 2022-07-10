import { mergeClassNames } from '../../helpers/styles';
import { Sides } from '../../enums';
import Card from './Card';
import { ITimelineItem } from '../../storyblok/models/ITab';
import ReactMarkdown from 'react-markdown';

export type TimelineItemProps = {
  side?: keyof typeof Sides;
};
const TimelineItem = ({
  category,
  items,
  side,
}: TimelineItemProps & ITimelineItem) => {
  return (
    <div
      className={mergeClassNames(
        side === 'left' ? 'flex-row-reverse' : '',
        'left-timeline mb-8 flex w-full items-center  justify-start md:justify-between'
      )}
    >
      <div className="order-1 overflow-x-hidden md:w-5/12 ">
        <div
          className={mergeClassNames(
            side === 'left' ? 'text-left' : 'text-right',
            'paragraph hidden font-semibold text-brand-aqua md:block'
          )}
          data-aos={side === 'left' ? 'fade-right' : 'fade-left'}
          data-aos-anchor={'#roadmap-tabs'}
          data-aos-delay="200"
        >
          {category}
        </div>
      </div>
      <div
        className="z-60 absolute left-[-0.9rem] order-1 flex h-8 w-8 items-center rounded-full border-2 border-brand-light-blue bg-brand-darker-blue drop-shadow-2xl md:relative md:left-[1.2px]"
        data-aos={'zoom-in'}
      >
        <div
          className="mx-auto h-3 w-3 rounded-full bg-brand-light-blue text-lg font-semibold text-white focus:bg-brand-aqua focus:outline-none"
          tabIndex={0}
        />
      </div>
      <div
        className="order-1 w-full drop-shadow-xl md:w-5/12"
        data-aos={'fade-up'}
        data-aos-anchor={'#roadmap-tabs'}
        data-aos-delay="200"
      >
        <Card>
          <div className="mb-1 text-left font-semibold text-brand-aqua md:hidden">
            {category}
          </div>
          <ReactMarkdown className={'rich-text-list'}>{items}</ReactMarkdown>
        </Card>
      </div>
    </div>
  );
};
export default TimelineItem;
