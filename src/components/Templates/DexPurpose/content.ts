export type Testimonial = {
  key: number;
  quote: Array<string>;
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
    author: 'Vitalik Buterin',
    imageSrc:
      'https://www.justetf.com/images/thumbnails/etf-investment-guide-theme-ethereum.jpg',
  },
  {
    key: 1,
    quote: [
      'We should put resources toward a proper (trustless, serverless) ETH <-> BTC decentralized exchange.',
      "It's embarrassing that we still can't easily move between the two largest crypto ecosystems trustlessly.",
    ],
    author: 'BUGON HJOAKJDS',
    imageSrc:
      'https://www.justetf.com/images/thumbnails/etf-investment-guide-theme-crypto.jpg',
  },
  {
    key: 2,
    quote: [
      'We should put resources toward a proper (trustless, serverless) ETH <-> BTC decentralized exchange.',
      "It's embarrassing that we still can't easily move between the two largest crypto ecosystems trustlessly.",
    ],
    author: 'REIIAKDJ ASDAsd ',
    imageSrc:
      'https://mc-monitoring.com/wp-content/uploads/2020/08/Cyber-security.jpg',
  },
];
