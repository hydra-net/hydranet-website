import { IPicture } from '../../Atoms/Picture';

export type AdvantageType = {
  title: string;
  icon: IPicture;
  body?: string;
};
export const DEX_ADVANTAGES: Array<AdvantageType> = [
  {
    title: 'Speed and Scalability',
    icon: {
      isLazy: true,
      alt: 'Speed ',
      fallBackSrc: 'images/speed_scalability.png',
      srcSets: [
        {
          src: 'svg/speed_scalability.svg',
          type: 'svg+xml',
        },
        {
          src: 'images/speed_scalability.png',
          type: 'png',
        },
      ],
    },
    body: 'As Hydranet DEX executes the swaps off-chain, it offers instant, scalable and straightforward trading across different blockchains.',
  },
  {
    title: 'Low Transaction fees',
    icon: {
      isLazy: true,
      alt: 'Low ',
      fallBackSrc: 'images/low_fees.png',
      srcSets: [
        {
          src: 'svg/low_fees.svg',
          type: 'svg+xml',
        },
        {
          src: 'images/low_fees.png',
          type: 'png',
        },
      ],
    },
    body: 'As there are no fees when sending a lightning transaction, the only fee that is left is the DEX fee when executing a swap. ',
  },
  {
    title: 'Liquidity',
    icon: {
      isLazy: true,
      alt: 'Liquidity',
      fallBackSrc: 'images/liquidity.png',
      srcSets: [
        {
          src: 'svg/liquidity.svg',
          type: 'svg+xml',
        },
        {
          src: 'images/liquidity.png',
          type: 'png',
        },
      ],
    },
    body: 'By working with industry-leading projects, arbitrage- and AMM bots, the Hydranet DEX offers tight spreads and deep liquidity.',
  },
  {
    title: 'Fee Distribution',
    icon: {
      isLazy: true,
      alt: 'Fee ',
      fallBackSrc: 'images/fees_distribution.png',
      srcSets: [
        {
          src: 'svg/fees_distribution.svg',
          type: 'svg+xml',
        },
        {
          src: 'images/fees_distribution.png',
          type: 'png',
        },
      ],
    },
    body: 'The Hydranet DEX will distribute a share of all fees earned from daily trading volume directly to the HDX stakers.',
  },
  {
    title: 'Privacy',
    icon: {
      isLazy: true,
      alt: 'Privacy',
      fallBackSrc: 'images/privacy.png',
      srcSets: [
        {
          src: 'svg/privacy.svg',
          type: 'svg+xml',
        },
        {
          src: 'images/privacy.png',
          type: 'png',
        },
      ],
    },
    body: "As trades are settled off-chain, there is no explorer to track the user's trade history.",
  },
  {
    title: 'Native Assets',
    icon: {
      isLazy: true,
      alt: 'Native ',
      fallBackSrc: 'images/native_asset.png',
      srcSets: [
        {
          src: 'svg/native_asset.svg',
          type: 'svg+xml',
        },
        {
          src: 'images/native_asset.png',
          type: 'png',
        },
      ],
    },
    body: 'By using Connext and Lightning Network, you can trade without the need to wrap or peg your native assets.',
  },
];
