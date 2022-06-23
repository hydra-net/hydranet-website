export type AdvantageType = {
  title: string;
  icon: string;
  body?: string;
};
export const DEX_ADVANTAGES: Array<AdvantageType> = [
  {
    title: 'Speed and Scalability',
    icon: '/advantage-try.png',
    body: 'As Hydranet DEX executes the swaps off-chain, it offers instant, scalable and straightforward trading across different blockchains.',
  },
  {
    title: 'Low Transaction fees',
    icon: '/advantage-try.png',
    body: 'As there are no fees when sending a lightning transaction, the only fee that is left is the DEX fee when executing a swap. ',
  },
  {
    title: 'Liquidity',
    icon: '/advantage-try.png',
    body: 'By working with industry-leading projects, arbitrage- and AMM bots, the Hydranet DEX offers tight spreads and deep liquidity.',
  },
  {
    title: 'Fee Distribution',
    icon: '/advantage-try.png',
    body: 'The Hydranet DEX will distribute a share of all fees earned from daily trading volume directly to the HDX stakers.',
  },
  {
    title: 'Privacy',
    icon: '/advantage-try.png',
    body: "As trades are settled off-chain, there is no explorer to track the user's trade history.",
  },
  {
    title: 'Native Assets',
    icon: '/advantage-try.png',
    body: 'By using Connext and Lightning Network, you can trade without the need to wrap or peg your native assets.',
  },
];
