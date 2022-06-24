export type Testimonial = {
  key: number;
  quote: Array<string>;
  quoteUrl?: string;
  author: string;
  imageSrc: string;
};

export const TESTIMONIALS: Array<Testimonial> = [
  {
    key: 0,
    quote: [
      'We should put resources toward a proper (trustless, serverless) ETH <-> BTC decentralized exchange.',
      "It's embarrassing that we still can't easily move between the two largest crypto ecosystems trustlessly.",
    ],
    quoteUrl: 'https://twitter.com/vitalikbuterin/status/1242553658195271681',
    author: 'Vitalik Buterin',
    imageSrc:
      'https://www.justetf.com/images/thumbnails/etf-investment-guide-theme-ethereum.jpg',
  },
  {
    key: 1,
    quote: [
      'If you want to have a real DEX it has to be P2P, with a network structure similar to #LightningNetwork ⚡',
      'You can still have central matching and P2P settlement and thousands of micro-exchanges.',
    ],
    quoteUrl: 'https://twitter.com/paoloardoino/status/1309499848882782211',
    author: 'Paolo Ardoino',
    imageSrc:
      'https://www.justetf.com/images/thumbnails/etf-investment-guide-theme-crypto.jpg',
  },
  {
    key: 2,
    quote: [
      'Some of the gaps we currently see are around cost and scalability. Lightning is solving for this with payments.',
      'We need a solve for exchange infrastructure between digital assets, like stablecoins.',
    ],
    quoteUrl: 'https://twitter.com/brockm/status/1431319761103646722',
    author: 'Mike Brock',
    imageSrc:
      'https://mc-monitoring.com/wp-content/uploads/2020/08/Cyber-security.jpg',
  },
];
