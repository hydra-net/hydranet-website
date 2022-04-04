import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};
const Button = ({ onClick, children }: ButtonProps) => (
  <button
    className={
      'w-full rounded-md bg-primary-gradient p-3 font-medium tracking-wider text-white transition-all duration-200 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-aqua'
    }
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
