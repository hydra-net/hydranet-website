import Navbar from '../Molecules/Navbar';
import { ReactNode } from 'react';

type LayoutProp = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProp) => {
  return (
    <>
      <Navbar />
      <main className={'mt-16'}>{children}</main>
      <footer>hey</footer>
    </>
  );
};

export default Layout;
