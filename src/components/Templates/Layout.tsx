import Navbar from '../Molecules/Navbar';
import { ReactNode } from 'react';
import BrandFooter from '../Molecules/BrandFooter';
import Banner from '../Atoms/Banner';

type LayoutProp = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProp) => {
  return (
    <div id={'app-top'} className={'relative'}>
      <Navbar />
      <main>{children}</main>
      <div className="bg-brand-darker-blue">
        <BrandFooter />
      </div>
    </div>
  );
};

export default Layout;
