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
        'Investigate feasibility of integrating Arbitrum into the DEX',
        'Implement the guides tab',
        'Add localization support (languages)',
        'L2 active enhancements (make all pairs online simultaneously)',
      ],
    },
    {
      title: 'RESEARCH',
      body: ['Investigate HDX DEX rewards'],
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
      body: ['Release the final SSUI', 'Add Chainlink price feed'],
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
      title: 'WEBPAGES',
      body: [
        'Dedicated DEX showcase page',
        'Investigate internationalization integration',
        'Headless CMS integration',
      ],
    },
    {
      title: 'MARKETING / PR',
      body: [
        'Build long-term strategy',
        'Build partnerships',
        'Research possible liquidity providers',
      ],
    },
    {
      title: 'RESEARCH',
      body: ['EVM Scaling solutions (Q3)'],
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
        'Debug and release Vortex: in-wallet market maker bots for every user',
        'Build a public and updated API',
        'Implement referral links',
        'Atlas release',
        'Phoenix release',
        'Improve UX',
      ],
    },
    {
      title: 'TOKEN',
      body: [
        'Develop, test and publish HNFTS',
        'HDX DEX smart contracts',
        'Reduce maximum HDX supply',
      ],
    },
    {
      title: 'WEBPAGES',
      body: [
        'FAQ section',
        'Host articles directly on website for SEO',
        'DEX and HDX stats page',
      ],
    },
    {
      title: 'MARKETING / PR',
      body: [
        'Direct advertising (eg Twitter Ads)',
        'Communication and cooperation with institutional investors',
        'Contact influencers, researchers and other useful projects',
        'Research total addressable market, potential user groups',
        'Expanding the community (eg by Drip campaigns)',
      ],
    },

    {
      title: 'RESEARCH',
      body: [
        'Enhance DEX UX (Q3)',
        'Showcase results of previous EVM scaling solution research',
        'Research the implementation of lightning pools (to increase BTC channel rental liquidity)',
        'Research Hydra Liquidity provider (HLP) token',
        'Neutrino investigation',
      ],
    },
  ],
};
