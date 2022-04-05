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
        side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse',
        'flex w-full flex-col items-center justify-between overflow-x-hidden lg:overflow-auto'
      )}
    >
      <div
        className={mergeClassNames(
          'w-full lg:w-1/2 ',
          side === 'left' ? 'lg:pr-6' : 'lg:pl-6'
        )}
        data-aos={side === 'left' ? 'fade-right' : 'fade-left'}
      >
        {aSideContent}
      </div>
      <div
        className={mergeClassNames(
          'mt-6 w-full  md:max-w-lg  lg:mt-0 lg:w-1/2 lg:max-w-full ',
          side === 'left' ? 'lg:pl-6' : 'lg:pr-6'
        )}
        data-aos={side === 'left' ? 'fade-left' : 'fade-right'}
      >
        {bSideContent}
      </div>
    </div>
  );
};

export default ContentSwap;
