import { Tab } from '../../Molecules/Tabs';
import { DEX_DOWNLOAD_TABS_VALUES } from '../../../enums';
import { DEX_DOWNLOAD_LINKS } from '../../../constants';

export const DEX_DOWNLOAD_TABS_HEADER: Array<Tab> = [
  {
    name: 'MAINNET',
    value: DEX_DOWNLOAD_TABS_VALUES.MAINNET,
  },
  {
    name: 'TESTNET',
    value: DEX_DOWNLOAD_TABS_VALUES.TESTNET,
  },
];

type DexDownloadItem = {
  description: string;
  links: Array<{
    os: string;
    url: string;
  }>;
  warning?: string;
};
/**
 * Download content
 */
type DownloadGroupItem = {
  [key in DEX_DOWNLOAD_TABS_VALUES]: DexDownloadItem;
};
export const DEX_DOWNLOAD_TABS_CONTENT: DownloadGroupItem = {
  [DEX_DOWNLOAD_TABS_VALUES.MAINNET]: {
    description:
      'Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque',
    links: [
      {
        os: 'Windows',
        url: DEX_DOWNLOAD_LINKS.mainnet.windows,
      },
      {
        os: 'Linux',
        url: DEX_DOWNLOAD_LINKS.mainnet.linux,
      },
    ],
    warning: '',
  },
  [DEX_DOWNLOAD_TABS_VALUES.TESTNET]: {
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    links: [
      {
        os: 'Windows',
        url: DEX_DOWNLOAD_LINKS.testnet.windows,
      },
      {
        os: 'Linux',
        url: DEX_DOWNLOAD_LINKS.testnet.linux,
      },
    ],
    warning: '',
  },
};
