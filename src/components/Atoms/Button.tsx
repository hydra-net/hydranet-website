import { ReactNode } from 'react';
import { mergeClassNames } from '../../helpers/styles';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};
const Button = ({ onClick, children, disabled, ...props }: ButtonProps) => (
  <button
    className={mergeClassNames(
      'primary-button',
      disabled ? 'cursor-not-allowed hover:opacity-100' : 'cursor-pointer'
    )}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default Button;
