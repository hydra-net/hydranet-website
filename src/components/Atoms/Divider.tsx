import { mergeClassNames } from '../../helpers/styles';

type DividerProps = {
  dividerClassRef?: string;
};
const Divider = ({ dividerClassRef }: DividerProps) => (
  <div
    className={mergeClassNames(
      'h-[150px]  z-[1] bg-divider block w-full right-0 left-0 absolute',
      dividerClassRef ?? ''
    )}
  />
);

export default Divider;
