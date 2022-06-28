import Navbar from '../Molecules/Navbar/Navbar';
import { ReactNode } from 'react';
import BrandFooter from '../Molecules/BrandFooter';
import { INavigationLink } from '../../interfaces';

type LayoutProp = {
  children: ReactNode;
  navigation: INavigationLink[];
  footerBgClass?: string;
};
const Layout = ({
  children,
  navigation,
  footerBgClass = 'bg-brand-darker-blue',
}: LayoutProp) => {
  return (
    <div id={'app-top'} className={'relative'}>
      <Navbar navigation={navigation} />
      <main>{children}</main>
      <div className={footerBgClass}>
        <BrandFooter />
      </div>
    </div>
  );
};

export default Layout;
