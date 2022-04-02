import Card from '../Atoms/Card';

type CoinStatsProps = {
  stats?: Array<Record<string, string>>;
};
const CoinStats = ({ stats = [] }: CoinStatsProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:max-w-xl lg:max-w-5xl mx-auto">
        {stats.map((stat) => (
          <div key={Math.random() * 99} className={''}>
            <Card>
              <div className="text-2xl text-white font-bold tracking-wider">
                $220M
              </div>
              <div className="text-md mt-2 text-brand-greyed">Market cap</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinStats;
