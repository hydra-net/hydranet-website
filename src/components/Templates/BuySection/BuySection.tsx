import Hero from '../../Molecules/Hero';
import Caption from '../../Atoms/Caption';

import { IAppSection } from '../../../interfaces';
import { BUY_HDX_POSSIBILITIES } from './content';
import { mergeClassNames } from '../../../helpers/styles';

const BuySection = ({ id }: IAppSection) => {
  return (
    <section id={id} className="w-full">
      <Hero
        dividerClassRef={'bg-divider-articles top-0 transform rotate-180'}
        className={'bg-brand-medium-blue pb-16'}
      >
        <div className={'pt-20 xl:pt-[100px]'} />
        <Caption hashLabel={'buy'} title={'Where to get HDX'} />
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:mt-0 lg:grid-cols-2 lg:gap-3">
          {BUY_HDX_POSSIBILITIES.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target={'_blank'}
              aria-label={`go to ${item.url}`}
              className={mergeClassNames(
                'relative col-span-1 block flex min-h-[10rem] place-items-center justify-center rounded-sm bg-brand-blue py-8 px-8',
                'transition-opacity duration-300 ease-in-out hover:opacity-100 lg:opacity-50',
                'focus:outline-none focus:ring-2 focus:ring-brand-light-blue'
              )}
              rel="noreferrer"
            >
              <div>
                <picture>
                  <source srcSet={`${item.logo}.svg`} type={'image/svg+xml'} />
                  <source srcSet={`${item.logo}.png`} type={'image/png'} />
                  <img
                    src={`${item.logo}.png`}
                    alt={`${item.title} logo`}
                    className={'mb-6 max-h-20 w-48 sm:max-h-24 sm:w-72'}
                  />
                </picture>
                <p
                  className={
                    'absolute bottom-0 right-0 left-0 mb-3 text-center text-lg font-semibold text-brand-greyed'
                  }
                >
                  {item.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </Hero>
    </section>
  );
};
export default BuySection;
