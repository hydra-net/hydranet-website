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
    value: TABS_VALUES['IN PROGRESS'],
  },
  {
    name: 'TO DO',
    value: TABS_VALUES['TO DO'],
  },
];

/**
 * Roadmap content
 */
type TimelineGroupItemProps = {
  [key in TABS_VALUES]: Array<TimelineItemProps>;
};
export const ROADMAP_TABS_CONTENT: TimelineGroupItemProps = {
  /**
   * ROADMAP ITEMS DONE
   */
  [TABS_VALUES.DONE]: [
    {
      title: 'EVM',
      body: ['Investigate lower APY', 'Burn unswapped HDX'],
    },
    {
      title: 'DEX',
      body: [
        'Implement the guides tab',
        'Add localization support (languages)',
        'L2 active enhancements (make all pairs online simultaneously)',
      ],
    },
    {
      title: 'EVM',
      body: [
        'Coin Swap',
        'Improve data tracking',
        'Staking dashboard',
        'HDX Bonds (DAI and wETH)',
      ],
    },
    {
      title: 'DEX',
      body: [
        'Lazarus testnet setup',
        'BTC/USDC pair(testnet)',
        'Activated Vortex',
      ],
    },
    {
      title: 'PR',
      body: ['Reach out to tracking pages', 'Coin listing', 'WhiteBIT listing'],
    },
    {
      title: 'DEX',
      body: ['Lazarus Testnet release'],
    },
    {
      title: 'EVM',
      body: ['Liquidity provider bonds', 'Bridge proof of concept'],
    },
  ],
  /**
   * ROADMAP ITEMS IN PROGRESS
   */
  [TABS_VALUES['IN PROGRESS']]: [
    {
      title: 'EVM',
      body: ['Present the initial version of HDX tokenomics'],
    },
    {
      title: 'DEX',
      body: [
        'Release the final SSUI',
        'Investigate feasbility of integrating Arbitrum into the DEX',
      ],
    },
    {
      title: 'ORDERBOOK',
      body: [
        'Implement DEX refunds',
        'Implement maker payments',
        'Integrate Arbitrum network',
      ],
    },
    {
      title: 'MARKETING / PR',
      body: ['Build long-term strategy', 'Build partnerships'],
    },
    {
      title: 'RESEARCH',
      body: ['Investigate HDX DEX rewards'],
    },
  ],
  /**
   * ROADMAP ITEMS PLANNED
   */
  [TABS_VALUES['TO DO']]: [
    {
      title: 'EVM',
      body: ['Audit of our HDX smart contracts'],
    },
    {
      title: 'DEX',
      body: [
        'Launch on mainnet',
        'Build market maker bots',
        'Build arbitrage bots',
        'Build a public and updated API',
      ],
    },
    {
      title: 'MARKETING / PR',
      body: ['Research possible liquidity providers'],
    },
    {
      title: 'RESEARCH',
      body: ['EVM Scaling solutions (Q3)', 'Enhance DEX UX (Q3)'],
    },
  ],
};
