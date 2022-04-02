import Divider from '../Atoms/Divider';
import { ReactNode } from 'react';
import { IStyleableProps } from '../../interfaces';
import { mergeClassNames } from '../../helpers/styles';

type HeroProps = {
  dividerClassRef?: string;
  children?: ReactNode;
};
const Hero = ({
  children,
  dividerClassRef,
  className,
}: HeroProps & IStyleableProps) => {
  return (
    <section
      className={mergeClassNames(
        'min-h-[50rem] flex items-center py-32 relative',
        className ?? ''
      )}
    >
      {dividerClassRef && <Divider dividerClassRef={dividerClassRef} />}
      {children}
    </section>
  );
};
export default Hero;
