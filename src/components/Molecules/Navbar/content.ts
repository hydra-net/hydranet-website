import { INavigationLink } from '../../../interfaces';
import { BOND_BUY_LINK, HYDRANET_APP } from '../../../constants';

export const navigation: INavigationLink[] = [
  {
    name: 'Products',
    href: '#products',
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
  {
    name: 'Docs',
    href: 'https://hydranet-1.gitbook.io/hydranet/',
    target: '_blank',
  },
  {
    name: 'Voting',
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
