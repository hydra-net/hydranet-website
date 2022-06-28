import Picture from '../../Atoms/Picture';
import { IAdvantage } from '../../../storyblok/models/IAdvantage';

export type DexAdvantagesSectionProps = {
  title: string;
  subtitle: string;
  items: Array<IAdvantage>;
};
const DexAdvantagesSection = ({
  title,
  subtitle,
  items,
}: DexAdvantagesSectionProps) => {
  console.log('items', items);
  return (
    <div className="dex-section">
      <div className="w-full rounded-md bg-brand-blue p-5 text-center drop-shadow-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:py-8 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="title font-extrabold text-white">{title}</h2>
            <p className="sub-title mt-4 text-brand-greyed">{subtitle}</p>
          </div>
          <dl className="mt-12 space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {items.map((advantage) => (
              <div key={advantage.title} className="relative">
                <dt>
                  <Picture
                    sources={advantage.picture[0].sources}
                    fallback={advantage.picture[0].fallback}
                    cssClasses={'mr-auto mb-3 w-14 md:w-16 md:mx-auto'}
                  />
                  <p className="sub-title text-left font-medium text-white md:text-center">
                    {advantage.title}
                  </p>
                </dt>
                <dd className="paragraph mt-1 px-0 text-left text-brand-greyed md:px-4 md:text-center">
                  {advantage?.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default DexAdvantagesSection;
