import { mergeClassNames } from '../../helpers/styles';
import { Sides } from '../../enums';
import Card from './Card';

export type TimelineItemProps = {
  side?: keyof typeof Sides;
  number: number;
  title: string;
  body: string;
};
const TimelineItem = ({ number, title, body, side }: TimelineItemProps) => {
  return (
    <div
      className={mergeClassNames(
        side === 'left' ? 'flex-row-reverse' : '',
        'left-timeline mb-8 flex w-full items-center justify-between'
      )}
    >
      <div className="order-1 w-5/12" />
      <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-brand-light-blue shadow-xl">
        <h1 className="mx-auto text-lg font-semibold text-white">{number}</h1>
      </div>
      <div className="order-1 w-5/12 shadow-xl">
        <Card>
          <div className="mb-3 text-left text-xl font-bold text-white">
            {title}
          </div>
          <p className="text-left text-sm leading-snug tracking-wide text-brand-greyed">
            {body}
          </p>
        </Card>
      </div>
    </div>
  );
};
export default TimelineItem;
