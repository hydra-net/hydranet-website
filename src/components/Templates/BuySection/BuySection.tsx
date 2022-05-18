import Hero from '../../Molecules/Hero';
import Caption from '../../Atoms/Caption';

import { IAppSection } from '../../../interfaces';
import { BUY_HDX_POSSIBILITIES } from './content';

const BuySection = ({ id }: IAppSection) => {
  return (
    <section id={id} className="w-full">
      <Hero
        dividerClassRef={'bg-divider-articles top-0 transform rotate-180'}
        className={'bg-brand-medium-blue pb-16'}
      >
        <div className={'pt-20 xl:pt-[100px]'} />
        <Caption hashLabel={'buy'} title={'Where to get HDX'} />
        <div className="grid grid-cols-1 place-items-center gap-x-12 gap-y-24 md:grid-cols-2 md:gap-y-32">
          {BUY_HDX_POSSIBILITIES.map((item) => (
            <div
              className="relative flex h-full w-full items-center justify-center"
              key={item.url}
            >
              <a
                href={item.url}
                target={'_blank'}
                rel="noreferrer"
                aria-label={item.title}
              >
                <div className={item.classNames}>
                  <picture>
                    <source
                      srcSet={`${item.logo}.svg`}
                      type={'image/svg+xml'}
                    />
                    <source srcSet={`${item.logo}.png`} type={'image/png'} />
                    <img
                      src={`${item.logo}.png`}
                      alt={'whitebit logo'}
                      className={'mx-auto w-full'}
                    />
                  </picture>
                  <p
                    className={
                      'absolute -bottom-[3rem] left-0 right-0 mx-auto text-center text-lg font-medium tracking-wider text-brand-aqua transition-colors duration-300 hover:text-brand-light-blue'
                    }
                  >
                    {item.title}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </Hero>
    </section>
  );
};
export default BuySection;
