import TimelineItem, { TimelineItemProps } from '../Atoms/TimelineItem';

const timelineItems: Array<TimelineItemProps> = [
  {
    side: 'left',
    additionalInfo: 'DONE',
    title: 'EVM',
    body: ['Staking dashboard', 'HDX Bonds (DAI and wETH)'],
  },
  {
    side: 'right',
    additionalInfo: 'DONE',
    title: 'DEX',
    body: [
      'Lazarus testnet setup',
      'BTC/USDC pair(testnet)',
      'Activated Vortex',
    ],
  },
  {
    side: 'left',
    additionalInfo: 'IN PROGRESS',
    title: 'EVM',
    body: ['Liquidity provider bonds', 'Coin swap', 'Bridge proof of concept'],
  },
  {
    side: 'right',
    additionalInfo: 'IN PROGRESS',
    title: 'DEX',
    body: ['Lazarus Testnet release'],
  },
  {
    side: 'left',
    additionalInfo: 'IN PROGRESS',
    title: 'PR',
    body: ['Reach out to tracking pages', 'Coin listing'],
  },
];
const Timeline = () => {
  return (
    <div className="mx-auto h-full w-full">
      <div className="wrap relative h-full  pl-8 md:overflow-hidden md:p-0">
        <div className="border-2-2 absolute left-0 h-full border border-brand-light-blue md:left-[50%]" />
        {timelineItems.map((item) => (
          <TimelineItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
