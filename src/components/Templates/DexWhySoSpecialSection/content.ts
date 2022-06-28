import { BodyRowProps, HeaderColumnProps } from '../../Molecules/Table/Table';
import CheckMarkIconPng from '../../../../assets/images/checkmark.png';
import CheckMarkIconSvg from '../../../../assets/svg/checkmark.svg';
import NoneIconPng from '../../../../assets/images/none.png';
import NoneIconSvg from '../../../../assets/svg/none.svg';

export const DEX_COMPARISON_HEADERS: Array<HeaderColumnProps> = [
  {
    content: 'Compare',
  },
  {
    content: 'Layer 3',
  },
  {
    content: 'Layer 2',
  },
  {
    content: 'Layer 1',
    colSpan: 2,
  },
];

export const DEX_COMPARISON_ROWS: Array<BodyRowProps> = [
  [
    {
      content: 'Features',
    },
    {
      content: 'Cross-chain DEX',
      extra: 'Hydranet DEX',
    },
    {
      content: 'ETH DEX with roll',
      extra: 'Diversify, Uniswap V3',
    },
    {
      content: 'Specific blockchain DEX',
      extra: 'Uniswap v2, Binance DEX',
    },
    {
      content: 'Cross-chain DEX',
      extra: 'Shapeshift',
    },
  ],
  [
    {
      content: 'Native Assets',
      extra: 'Cross-chain interop.',
    },
    {
      content: {
        srcSets: [
          {
            src: CheckMarkIconPng.src,
            type: 'png',
          },
          {
            src: CheckMarkIconSvg.src,
            type: 'svg+xml',
          },
        ],
        fallBackSrc: CheckMarkIconPng.src,
        alt: 'yes',
      },
    },
    {
      content: 'Only ERC-20',
    },
    {
      content: 'Only ERC-20',
    },
    {
      content: {
        srcSets: [
          {
            src: CheckMarkIconPng.src,
            type: 'png',
          },
          {
            src: CheckMarkIconSvg.src,
            type: 'svg+xml',
          },
        ],
        fallBackSrc: CheckMarkIconPng.src,
        alt: 'yes',
      },
    },
  ],
  [
    {
      content: 'Fees',
    },
    {
      content: 'DEX fee only',
      extra: 'Taker pays maker',
    },
    {
      content: 'DEX fee only',
      extra: 'Taker pays maker',
    },
    {
      content: 'DEX + Blockchain fee',
    },
    {
      content: 'DEX + Blockchain fee',
    },
  ],
  [
    {
      content: 'Scalability',
      extra: 'Onchain',
    },
    {
      content: {
        srcSets: [
          {
            src: CheckMarkIconPng.src,
            type: 'png',
          },
          {
            src: CheckMarkIconSvg.src,
            type: 'svg+xml',
          },
        ],
        fallBackSrc: CheckMarkIconPng.src,
        alt: 'yes',
      },
    },
    {
      content: 'Moderate',
      extra: 'Onchain',
    },
    {
      content: {
        srcSets: [
          {
            src: NoneIconPng.src,
            type: 'png',
          },
          {
            src: NoneIconSvg.src,
            type: 'svg+xml',
          },
        ],
        fallBackSrc: NoneIconPng.src,
        alt: 'none',
      },
    },
    {
      content: {
        srcSets: [
          {
            src: NoneIconPng.src,
            type: 'png',
          },
          {
            src: NoneIconSvg.src,
            type: 'svg+xml',
          },
        ],
        fallBackSrc: NoneIconPng.src,
        alt: 'none',
      },
    },
  ],
  [
    {
      content: 'Privacy',
      extra: 'Onchain',
    },
    {
      content: {
        srcSets: [
          {
            src: CheckMarkIconPng.src,
            type: 'png',
          },
          {
            src: CheckMarkIconSvg.src,
            type: 'svg+xml',
          },
        ],
        fallBackSrc: CheckMarkIconPng.src,
        alt: 'yes',
      },
    },
    {
      content: 'Moderate',
      extra: 'Onchain',
    },
    {
      content: 'Moderate',
      extra: 'Onchain',
    },
    {
      content: 'Moderate',
      extra: 'Onchain',
    },
  ],
  [
    {
      content: 'Settlement Duration',
    },
    {
      content: '~ 1 second',
    },
    {
      content: 'Seconds - minutes',
    },
    {
      content: 'Seconds - minutes',
    },
    {
      content: 'Seconds - minutes',
    },
  ],
];
