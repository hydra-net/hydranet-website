import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};
const Card = ({ children }: CardProps) => (
  <div className="w-full rounded-md bg-brand-blue p-5 text-center">
    {children}
  </div>
);

export default Card;
