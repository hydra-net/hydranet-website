import { DEX_ADVANTAGES } from './content';

const DexAdvantagesSection = () => {
  return (
    <div className="dex-section">
      <div className="w-full rounded-md bg-brand-blue p-5 text-center drop-shadow-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:py-8 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold text-white md:text-3xl">
              What we bring to the table
            </h2>
            <p className="text-md mt-4 text-brand-greyed md:text-lg">
              Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
              quis in viverra tristique sem. Ornare feugiat viverra eleifend
              fusce orci in quis amet. Sit in et vitae
            </p>
          </div>
          <dl className="mt-12 space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {DEX_ADVANTAGES.map((adv) => (
              <div key={adv.title} className="relative">
                <dt>
                  <img
                    src={adv.icon}
                    className={'mx-auto mb-2 w-16 sm:w-20'}
                    alt={adv.title}
                  />
                  <p className="text-center text-lg font-medium leading-6 text-white">
                    {adv.title}
                  </p>
                </dt>
                <dd className="mt-2 px-4 text-center text-base text-brand-greyed">
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
