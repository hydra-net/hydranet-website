import Navbar from '../Molecules/Navbar/Navbar';
import { ReactNode } from 'react';
import BrandFooter from '../Molecules/BrandFooter';
import { INavigationLink } from '../../interfaces';
import { ILayout } from '../../storyblok/models/ILayout';

type LayoutProp = {
  children: ReactNode;
  navigation: INavigationLink[];
  footerBgClass?: string;
};
const Layout = ({
  children,
  navigation,
  footer,
  footerBgClass = 'bg-brand-darker-blue',
}: LayoutProp & ILayout) => {
  return (
    <div id={'app-top'} className={'relative'}>
      <Navbar navigation={navigation} />
      <main>{children}</main>
      <div className={footerBgClass}>
        <BrandFooter {...footer[0]} />
      </div>
    </div>
  );
};

export default Layout;
