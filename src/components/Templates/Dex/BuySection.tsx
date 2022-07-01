import Hero from '../../Molecules/Hero';
import Caption from '../../Atoms/Caption';

import { IAppSection } from '../../../interfaces';
import { BUY_HDX_POSSIBILITIES } from '../BuySection/content';
import { mergeClassNames } from '../../../helpers/styles';
import Button from '../../Atoms/Button';
import { openExternalTab } from '../../../helpers/common';

const BuySection = ({ id }: IAppSection) => {
  return (
    <section id={id} className="w-full">
      <Hero
        dividerClassRef={'bg-divider-buy top-0 transform rotate-180'}
        className={'bg-brand-medium-blue pb-16'}
      >
        <div className={'pt-20 xl:pt-[100px]'} />
        <Caption hashLabel={'buy'} title={'Where to get HDX'} />
        {/*  Mobile */}
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:hidden">
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
                    'sub-title absolute bottom-0 right-0 left-0 mb-3 text-center font-semibold text-brand-greyed'
                  }
                >
                  {item.title}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Desktop */}
        <div className={'js-aos-buy-section hidden space-y-8 lg:block'}>
          {BUY_HDX_POSSIBILITIES.map((item, index) => (
            <div
              key={item.logo}
              data-aos={'fade-up'}
              data-delay={index * 200}
              className="shadow- relative grid min-h-[10rem] grid-cols-4 place-items-center rounded-lg bg-brand-darker-blue p-6"
            >
              <div className="col-span-1">
                <a
                  href={item.url}
                  target={'_blank'}
                  aria-label={item.title}
                  rel="noreferrer"
                >
                  <picture>
                    <source
                      srcSet={`${item.logo}.svg`}
                      type={'image/svg+xml'}
                    />
                    <source srcSet={`${item.logo}.png`} type={'image/png'} />
                    <img
                      src={`${item.logo}.png`}
                      alt={`${item.title} logo`}
                      className={'max-h-20 w-48'}
                    />
                  </picture>
                </a>
              </div>
              <div className="col-span-2 text-brand-aqua">
                <div className="divider-y absolute top-0 bottom-0 my-3" />
                <div className={'pl-8'}>
                  <p className={'sub-title pb-2 font-bold text-white'}>
                    {item.title}
                  </p>
                  {item.body.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </div>
              <div className="col-span-1">
                <Button
                  additionalClassNames={
                    'base-button primary-button primary-button--full-rounded px-8 uppercase text-sm'
                  }
                  onClick={() => openExternalTab(item.url)}
                >
                  Buy now
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className={'mt-8 text-center lg:mt-12'}>
          <p className="text-lg font-semibold uppercase text-white">
            Disclaimer :
          </p>
          <p className="mx-auto max-w-xl italic text-brand-greyed">
            The list of exchanges is provided for informational purposes only.
            Hydranet does not represent, recommend or advertise these services.
          </p>
        </div>
      </Hero>
    </section>
  );
};
export default BuySection;
