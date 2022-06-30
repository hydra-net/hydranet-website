import { ReactNode } from 'react';

import Navbar from '../Molecules/Navbar/Navbar';
import BrandFooter from '../Molecules/BrandFooter';

import { ILayout } from '../../storyblok/models/ILayout';

type LayoutProp = {
  children: ReactNode;
  footerBgClass?: string;
};
const Layout = ({
  children,
  navbar,
  footer,
  footerBgClass = 'bg-brand-darker-blue',
}: LayoutProp & ILayout) => {
  return (
    <div id={'app-top'} className={'relative'}>
      <Navbar {...navbar[0]} />
      <main>{children}</main>
      <div className={footerBgClass}>
        <BrandFooter {...footer[0]} />
      </div>
    </div>
  );
};

export default Layout;
