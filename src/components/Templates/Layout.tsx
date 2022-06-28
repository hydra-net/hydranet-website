import Navbar from '../Molecules/Navbar/Navbar';
import { ReactNode } from 'react';
import BrandFooter from '../Molecules/BrandFooter';
import { INavigationLink } from '../../interfaces';

type LayoutProp = {
  children: ReactNode;
  navigation: INavigationLink[];
};
const Layout = ({ children, navigation }: LayoutProp) => {
  return (
    <div id={'app-top'} className={'relative'}>
      <Navbar navigation={navigation} />
      <main>{children}</main>
      <div className="bg-brand-darker-blue">
        <BrandFooter />
      </div>
    </div>
  );
};

export default Layout;
