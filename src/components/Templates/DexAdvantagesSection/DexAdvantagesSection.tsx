import { DEX_ADVANTAGES } from './content';
import Picture from '../../Atoms/Picture';

const DexAdvantagesSection = () => {
  return (
    <div className="dex-section">
      <div className="w-full rounded-md bg-brand-blue p-5 text-center drop-shadow-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:py-8 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="title font-extrabold text-white">
              What we bring to the table
            </h2>
            <p className="sub-title mt-4 text-brand-greyed">
              Hydranet has developed a true next-generation DEX that solves many
              of the problems that prevent current DEXs from scaling, such as
              ever-increasing costs and transaction times.
            </p>
          </div>
          <dl className="mt-12 space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {DEX_ADVANTAGES.map((adv) => (
              <div key={adv.title} className="relative">
                <dt>
                  <Picture
                    srcSets={adv.icon.srcSets}
                    isLazy={adv.icon.isLazy}
                    alt={adv.icon.alt}
                    fallBackSrc={adv.icon.fallBackSrc}
                    classes={'mr-auto mb-3 w-14 md:w-[4.5rem] md:mx-auto'}
                  />

                  <p className="sub-title text-left font-medium text-white md:text-center">
                    {adv.title}
                  </p>
                </dt>
                <dd className="paragraph mt-1 px-0 text-left text-brand-greyed md:px-4 md:text-center">
                  {adv?.body}
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
