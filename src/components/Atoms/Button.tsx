import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};
const Button = ({ onClick, children }: ButtonProps) => (
  <button
    className={
      'w-full rounded-md bg-primary-gradient p-3 font-medium tracking-wider text-white'
    }
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
