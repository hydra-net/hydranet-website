import {
  SUSHISWAP_BUY_LINK,
  UNISWAP_BUY_LINK,
  WHITEBIT_REF_LINK,
} from '../../../constants';

type BuyHdxLinkType = {
  title: string;
  url: string;
  logo: string;
  description?: string;
  classNames: string;
};

export const BUY_HDX_POSSIBILITIES: Array<BuyHdxLinkType> = [
  {
    title: 'WhiteBIT',
    url: WHITEBIT_REF_LINK,
    logo: '/wb_logo_light',
    classNames: 'w-56 lg:w-72',
  },
  {
    title: 'Uniswap',
    url: UNISWAP_BUY_LINK,
    logo: '/uniswap-uni-logo',
    classNames: 'w-28 lg:w-36',
  },
  {
    title: 'Sushi',
    url: SUSHISWAP_BUY_LINK,
    logo: '/sushiswap-sushi-logo',
    classNames: 'w-24 lg:w-32',
  },
  {
    title: 'Bonds',
    url: 'http://localhost',
    logo: '/hydranet-logo',
    classNames: 'w-24 lg:w-28',
  },
];
