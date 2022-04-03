import { mergeClassNames } from '../../helpers/styles';
import { ReactNode } from 'react';
import { Sides } from '../../enums';

type ContentSwapProps = {
  side?: keyof typeof Sides;
  aSideContent?: ReactNode;
  bSideContent?: ReactNode;
};

const ContentSwap = ({
  side = 'left',
  aSideContent,
  bSideContent,
}: ContentSwapProps) => {
  return (
    <div
      className={mergeClassNames(
        side === 'left'
          ? 'flex-col lg:flex-row'
          : 'flex-col-reverse lg:flex-row-reverse',
        'flex w-full items-center justify-between'
      )}
    >
      <div
        className={mergeClassNames(
          'w-full lg:w-1/2',
          side === 'left' ? 'lg:pr-6' : 'lg:pl-6'
        )}
      >
        {aSideContent}
      </div>
      <div
        className={mergeClassNames(
          'mt-6 w-full md:max-w-lg lg:mt-0  lg:w-1/2 lg:max-w-full',
          side === 'left' ? 'lg:pl-6' : 'lg:pr-6'
        )}
      >
        {bSideContent}
      </div>
    </div>
  );
};

export default ContentSwap;
