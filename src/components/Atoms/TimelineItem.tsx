import { mergeClassNames } from '../../helpers/styles';
import { Sides } from '../../enums';
import Card from './Card';

export type TimelineItemProps = {
  side?: keyof typeof Sides;
  additionalInfo?: string;
  title: string;
  body: string;
};
const TimelineItem = ({
  additionalInfo = 'hey',
  title,
  body,
  side,
}: TimelineItemProps) => {
  return (
    <div
      className={mergeClassNames(
        side === 'left' ? 'flex-row-reverse' : '',
        'left-timeline mb-8 flex w-full items-center  justify-start lg:justify-between'
      )}
    >
      <div className="order-1 lg:w-5/12">
        <div
          className={mergeClassNames(
            side === 'left' ? 'text-left' : 'text-right',
            'hidden text-lg font-semibold text-brand-light-blue lg:block'
          )}
        >
          {additionalInfo}
        </div>
      </div>
      <div className="z-60 absolute left-[-1rem] order-1 flex h-8 w-8 items-center rounded-full border-2 border-brand-light-blue bg-brand-darker-blue shadow-xl lg:relative lg:left-auto">
        <div className="mx-auto h-3 w-3 rounded-full bg-brand-light-blue text-lg font-semibold text-white" />
      </div>
      <div className="order-1 w-full shadow-xl lg:w-5/12">
        <Card>
          <div className="mb-1 text-left font-semibold text-brand-light-blue lg:hidden">
            {additionalInfo}
          </div>
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
