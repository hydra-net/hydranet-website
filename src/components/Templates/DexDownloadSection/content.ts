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
    isDisabled?: boolean;
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
      'The Hydranet DEX is currently in testnet only, once we are confident about everything, we will move to the mainnet version (TBD).',
    links: [
      {
        os: 'Windows',
        url: DEX_DOWNLOAD_LINKS.mainnet.windows,
        isDisabled: true,
      },
      {
        os: 'Linux',
        url: DEX_DOWNLOAD_LINKS.mainnet.linux,
        isDisabled: true,
      },
    ],
    warning: '',
  },
  [DEX_DOWNLOAD_TABS_VALUES.TESTNET]: {
    description: '',
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
    warning: "Please don't send real funds for using this version.",
  },
};
