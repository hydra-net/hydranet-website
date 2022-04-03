import Card from '../Atoms/Card';
import { IFact } from '../../interfaces';

const facts: Array<IFact> = [
  {
    title: 'DeFi for BTC',
    subtitle: 'BTC for DeFi markets',
    iconSrc: '/placeholder-icon-2.png',
  },
  {
    title: 'Incentivized holders',
    subtitle: 'Incentivized buybacks.',
    iconSrc: '/placeholder-icon-2.png',
  },
  {
    title: 'Your Keys',
    subtitle: 'Your Coins. Bar none.',
    iconSrc: '/placeholder-icon-2.png',
  },
];

const Facts = () => {
  return (
    <div>
      <div className="mx-auto grid grid-cols-1 gap-6 md:max-w-xl lg:max-w-5xl lg:grid-cols-3 lg:gap-12">
        {facts.map((fact) => (
          <div key={fact.subtitle} className={''}>
            <Card>
              <div className="mb-3 text-center">
                <img
                  src={fact.iconSrc}
                  alt={fact.title}
                  className={'mx-auto w-24'}
                />
              </div>
              <div className="text-2xl font-bold tracking-wider text-white">
                {fact.title}
              </div>
              <div className="text-md mt-2 text-brand-greyed">
                {fact.subtitle}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facts;
