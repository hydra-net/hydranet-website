import { mergeClassNames } from '../../helpers/styles';

type DividerProps = {
  dividerClassRef?: string;
};
const Divider = ({ dividerClassRef }: DividerProps) => (
  <div
    className={mergeClassNames(
      'absolute  right-0 left-0 z-[1] block h-[150px] w-full bg-divider',
      dividerClassRef ?? ''
    )}
  />
);

export default Divider;
