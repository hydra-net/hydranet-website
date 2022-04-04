import { ReactNode } from 'react';
import { mergeClassNames } from '../../helpers/styles';
import { IStyleableProps } from '../../interfaces';

enum ContainerSizes {
  lg,
  xl,
  xxl,
}

type ContainerProps = {
  children: ReactNode;
  size?: keyof typeof ContainerSizes;
};

const Container = ({ children, size }: ContainerProps & IStyleableProps) => {
  const getSizeFromContainer = () => {
    switch (size) {
      case 'lg':
        return 'max-w-[1024px]';
      case 'xl':
        return 'max-w-[1366px]';
      case 'xxl':
        return 'max-w-[1920px]';
      default:
        return 'max-w-[1024px]';
    }
  };
  return (
    <div
      className={mergeClassNames(
        getSizeFromContainer(),
        'mx-auto w-full px-10'
      )}
    >
      {children}
    </div>
  );
};

export default Container;
