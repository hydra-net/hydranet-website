import Card from '../Atoms/Card';
import { IFact } from '../../interfaces';

type CoinStatsProps = {
  stats?: Array<IFact>;
};
// @ts-ignore
const CoinStats = ({ stats = [1, 2, 3, 4] }: CoinStatsProps) => {
  return (
    <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:max-w-xl lg:max-w-3xl lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={Math.random() * 99} className={''}>
          <Card>
            <div className="text-2xl font-bold tracking-wider text-white">
              $220M
            </div>
            <div className="text-md mt-2 text-brand-greyed">Market cap</div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CoinStats;
