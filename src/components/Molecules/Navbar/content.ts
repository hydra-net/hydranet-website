import { INavigationLink } from '../../../interfaces';
import { BOND_BUY_LINK, HYDRANET_APP } from '../../../constants';

const BASE_NAVIGATION: INavigationLink[] = [
  {
    name: 'Docs',
    href: 'https://hydranet-1.gitbook.io/hydranet/',
    target: '_blank',
  },
  {
    name: 'Governance',
    href: 'https://snapshot.org/#/hydranet.eth/',
    target: '_blank',
  },
  {
    name: 'Bonds',
    href: BOND_BUY_LINK,
    target: '_blank',
    bg: 'bg-brand-light-blue',
  },
  {
    name: 'Launch APP',
    href: HYDRANET_APP,
    target: '_blank',
    bg: 'bg-primary-gradient',
  },
];

export const HOME_NAVIGATION: INavigationLink[] = [
  {
    name: 'Product',
    href: '#products',
  },
  {
    name: 'DEX',
    href: '/dex',
  },
  {
    name: 'Roadmap',
    href: '#roadmap',
  },
  {
    name: 'Buy',
    href: '#buy',
  },
  {
    name: 'News',
    href: '#articles',
  },
  ...BASE_NAVIGATION,
];
