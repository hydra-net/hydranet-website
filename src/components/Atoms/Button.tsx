import { ReactNode } from 'react';
import { mergeClassNames } from '../../helpers/styles';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  additionalClassNames?: string;
};
const Button = ({
  onClick,
  children,
  disabled,
  additionalClassNames,
  ...props
}: ButtonProps) => (
  <button
    className={mergeClassNames(
      'primary-button',
      disabled ? 'cursor-not-allowed hover:opacity-100' : 'cursor-pointer',
      additionalClassNames || ''
    )}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default Button;
