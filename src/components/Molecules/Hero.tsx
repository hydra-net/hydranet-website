import Divider from '../Atoms/Divider';
import { ReactNode } from 'react';
import { IStyleableProps } from '../../interfaces';
import { mergeClassNames } from '../../helpers/styles';
import Container from '../Atoms/Container';

type HeroProps = {
  dividerClassRef?: string;
  children?: ReactNode;
};
const Hero = ({
  children,
  dividerClassRef,
  className,
  ...props
}: HeroProps & IStyleableProps) => {
  return (
    <div
      className={mergeClassNames(
        'relative flex min-h-[50rem] items-center py-10 lg:py-32',
        className ?? ''
      )}
      {...props}
    >
      <Container size={'xl'}>
        {dividerClassRef && <Divider dividerClassRef={dividerClassRef} />}
        {children}
      </Container>
    </div>
  );
};
export default Hero;
