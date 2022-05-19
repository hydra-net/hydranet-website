import {
  BOND_BUY_LINK,
  SUSHISWAP_BUY_LINK,
  UNISWAP_BUY_LINK,
  WHITEBIT_REF_LINK,
} from '../../../constants';

type BuyHdxLinkType = {
  title: string;
  url: string;
  logo: string;
  body: Array<string>;
};

export const BUY_HDX_POSSIBILITIES: Array<BuyHdxLinkType> = [
  {
    title: 'WhiteBIT',
    url: WHITEBIT_REF_LINK,
    logo: '/wb_logo_light',
    body: [
      'WhiteBIT is a top 15 exchange with great liquidity, a great team, many pairs, and also KYC free.',
      '*Affiliate Disclosure: This post contains an affiliate link. We earn a commission if you use the link to sign up and trade. Thanks',
    ],
  },
  {
    title: 'Bonds',
    url: BOND_BUY_LINK,
    logo: '/hydranet-logo',
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo',
    ],
  },
  {
    title: 'Uniswap',
    url: UNISWAP_BUY_LINK,
    logo: '/uniswap-uni-logo',
    body: [
      'Uniswap is a decentralized cryptocurrency exchange that facilitates automated transactions between cryptocurrency tokens on the Ethereum blockchain through the use of smart contracts.',
    ],
  },
  {
    title: 'Sushi',
    url: SUSHISWAP_BUY_LINK,
    logo: '/sushiswap-sushi-logo',
    body: [
      'SushiSwap is a software running on Ethereum that seeks to incentivize a network of users to operate a platform where users can buy and sell crypto assets.',
    ],
  },
];
