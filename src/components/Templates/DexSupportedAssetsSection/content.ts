import {
  IMAGES_ASSETS_BASE_URL,
  SVG_ASSETS_BASE_URL,
} from '../../../constants';
import { IPicture } from '../../Atoms/Picture';

export interface DexTradeAsset extends IPicture {
  name: string;
}

export const DEX_TRADE_ASSETS: Array<DexTradeAsset> = [
  {
    name: 'Bitcoin',
    alt: 'bitcoin',
    fallBackSrc: `images/coins/btc.png`,
    classes: '',
    srcSets: [
      {
        src: `svg/coins/btc.svg`,
        type: 'svg+xml',
      },
      {
        src: `images/coins/btc.png`,
        type: 'png',
      },
    ],
  },
  {
    name: 'Ether',
    alt: 'ether',
    fallBackSrc: `images/coins/eth.png`,
    classes: '',
    srcSets: [
      {
        src: `svg/coins/eth.svg`,
        type: 'svg+xml',
      },
      {
        src: `images/coins/eth.png`,
        type: 'png',
      },
    ],
  },
  {
    name: 'Tether',
    alt: 'tether',
    fallBackSrc: `images/coins/usdt.png`,
    classes: '',
    srcSets: [
      {
        src: `svg/coins/usdt.svg`,
        type: 'svg+xml',
      },
      {
        src: `images/coins/usdt.png`,
        type: 'png',
      },
    ],
  },
  {
    name: 'USD Coin',
    alt: 'usd coin',
    fallBackSrc: `images/coins/usdc.png`,
    classes: '',
    srcSets: [
      {
        src: `svg/coins/usdc.svg`,
        type: 'svg+xml',
      },
      {
        src: `images/coins/usdc.png`,
        type: 'png',
      },
    ],
  },
  {
    name: 'Litecoin',
    alt: 'litecoin',
    fallBackSrc: `images/coins/ltc.png`,
    classes: '',
    srcSets: [
      {
        src: `svg/coins/ltc.svg`,
        type: 'svg+xml',
      },
      {
        src: `images/coins/ltc.png`,
        type: 'png',
      },
    ],
  },
];
