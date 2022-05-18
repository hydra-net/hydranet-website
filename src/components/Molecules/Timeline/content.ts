import { Tab } from '../Tabs';
import { TABS_VALUES } from '../../../enums';
import { TimelineItemProps } from '../../Atoms/TimelineItem';

/**
 * Tabs roadmap content
 */
export const ROADMAP_TABS_HEADER: Array<Tab> = [
  {
    name: 'DONE',
    value: TABS_VALUES.DONE,
  },
  {
    name: 'IN PROGRESS',
    value: TABS_VALUES.IN_PROGRESS,
  },
  {
    name: 'TODO',
    value: TABS_VALUES.TODO,
  },
];

/**
 * Roadmap content
 */
export const ROADMAP_TABS_CONTENT: Array<TimelineItemProps> = [
  {
    additionalInfo: 'DONE',
    title: 'EVM',
    body: ['Staking dashboard', 'HDX Bonds (DAI and wETH)'],
  },
  {
    additionalInfo: 'DONE',
    title: 'DEX',
    body: [
      'Lazarus testnet setup',
      'BTC/USDC pair(testnet)',
      'Activated Vortex',
    ],
  },
  {
    additionalInfo: 'DONE',
    title: 'PR',
    body: ['Reach out to tracking pages', 'Coin listing'],
  },
  {
    additionalInfo: 'DONE',
    title: 'DEX',
    body: ['Lazarus Testnet release'],
  },
  {
    additionalInfo: 'DONE',
    title: 'EVM',
    body: ['Liquidity provider bonds', 'Bridge proof of concept'],
  },
  {
    additionalInfo: 'IN PROGRESS',
    title: 'EVM',
    body: ['Coin Swap'],
  },
  // new
  {
    additionalInfo: 'IN PROGRESS',
    title: 'DEX',
    body: [
      'Implements the guides tab',
      'add localization support(languages)',
      'L2 active enhancements (make all pairs online simultaneously)',
    ],
  },
  {
    additionalInfo: 'TODO',
    title: 'EVM',
    body: ['Burn unswapped HDX', 'Audit of our HDX smart contracts'],
  },
  {
    additionalInfo: 'TODO',
    title: 'DEX - ORDERBOOK',
    body: [
      'Implement DEX refunds',
      'Implement maker payments',
      'Integrate Arbitrum network',
    ],
  },
  {
    additionalInfo: 'TODO',
    title: 'DEX',
    body: [
      'Release the final SSUI',
      'Investigate feasbility of integrating Arbitrum into the DEX',
    ],
  },
];
