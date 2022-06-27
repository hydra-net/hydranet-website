import { mergeClassNames } from '../../helpers/styles';
import { ReactNode } from 'react';

type SkeletonProps = {
  size?: string;
  sizeY?: string;
  sizeX?: string;
  children?: ReactNode;
};
const Skeleton = ({ children }: SkeletonProps) => (
  <div className="inline-flex animate-pulse rounded-md border border-brand-darker-blue bg-brand-blue shadow-lg">
    {children}
  </div>
);

const Rectangle = ({ size, sizeX = 'full', sizeY = 'full' }: SkeletonProps) => (
  <div className="inline-flex animate-pulse rounded-md border border-brand-darker-blue bg-brand-blue shadow-lg">
    <div
      className={mergeClassNames(
        size ? `w-${size} h-${size}` : `${sizeY} ${sizeX}`,
        'rounded-md bg-slate-700'
      )}
    />
  </div>
);

const Square = ({ size, sizeX = 'full', sizeY = 'full' }: SkeletonProps) => (
  <div className="inline-flex animate-pulse rounded-md border border-brand-darker-blue bg-brand-blue shadow-lg">
    <div
      className={mergeClassNames(
        size ? `w-${size} h-${size}` : `${sizeY} ${sizeX}`,
        'rounded-md bg-slate-700'
      )}
    />
  </div>
);

const Circle = ({ size, sizeX = 'full', sizeY = 'full' }: SkeletonProps) => (
  <div
    className={mergeClassNames(
      size ? `w-${size} h-${size}` : `${sizeY} ${sizeX}`,
      'inline-flex animate-pulse rounded-full border border-brand-darker-blue bg-brand-blue shadow-lg'
    )}
  >
    <div
      className={mergeClassNames(
        size ? `w-${size} h-${size}` : `${sizeY} ${sizeX}`,
        'rounded-full bg-slate-700'
      )}
    />
  </div>
);

const Card = () => (
  <div className="inline-flex animate-pulse rounded-md border border-brand-darker-blue bg-brand-blue shadow-lg">
    <div className="h-24 w-full rounded-t-md bg-slate-700" />
    <div className="px-4 pb-4">
      <div className="w-full space-y-6 py-1">
        <div className="mt-3 h-2 w-24 rounded bg-slate-700" />
        <div className="space-y-3">
          <div className="col-span-2 h-2 rounded bg-slate-700" />
          <div className="col-span-1 h-2 rounded bg-slate-700" />
        </div>
      </div>
    </div>
  </div>
);

Skeleton.Rectangle = Rectangle;
Skeleton.Square = Square;
Skeleton.Circle = Circle;
Skeleton.Card = Card;

export default Skeleton;
