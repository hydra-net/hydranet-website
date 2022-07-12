import Hero from '../Molecules/Hero';
import Caption from '../Atoms/Caption';
import Button from '../Atoms/Button';
import Picture from '../Atoms/Picture';

import { IAppSection } from '../../interfaces';
import { ICaption } from '../../storyblok/models/ICaption';
import { IParagraph } from '../../storyblok/models/IParagraph';
import { ICallToAction } from '../../storyblok/models/iCallToAction';

import { mergeClassNames } from '../../helpers/styles';
import { openExternalTab } from '../../helpers/common';

export type BuySectionProps = {
  caption: Array<ICaption>;
  disclaimer_body: Array<IParagraph>;
  disclaimer_title: string;
  items: Array<ICallToAction>;
};
const BuySection = ({
  id,
  caption = [],
  disclaimer_body = [],
  disclaimer_title,
  items = [],
}: IAppSection & BuySectionProps) => {
  return (
    <section id={id} className="w-full">
      <Hero
        dividerClassRef={'bg-divider-buy top-0 transform rotate-180'}
        className={'bg-brand-medium-blue pb-16'}
      >
        <div className={'pt-20 xl:pt-[100px]'} />
        <Caption hashLabel={caption[0]?.hashLabel} title={caption[0]?.title} />
        {/*  Mobile */}
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:hidden">
          {items.map((item) => (
            <a
              key={item.button[0].href}
              href={item.button[0].href}
              target={item.button[0].target || '_blank'}
              aria-label={item.picture[0].fallback.alt}
              className={mergeClassNames(
                'relative col-span-1 block flex min-h-[10rem] place-items-center justify-center rounded-sm bg-brand-blue py-8 px-8',
                'transition-opacity duration-300 ease-in-out hover:opacity-100 lg:opacity-50',
                'focus:outline-none focus:ring-2 focus:ring-brand-light-blue'
              )}
              rel="noreferrer"
            >
              <div>
                <Picture
                  sources={item.picture[0].sources}
                  fallback={item.picture[0].fallback}
                  cssClasses={mergeClassNames(
                    'mb-6 max-h-20 w-48 sm:max-h-24 sm:w-72',
                    item.picture[0].cssClasses || ''
                  )}
                />
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
          {items.map((item, index) => (
            <div
              key={item._uid}
              data-aos={'fade-up'}
              data-delay={index * 200}
              className="shadow- relative grid min-h-[10rem] grid-cols-4 place-items-center rounded-lg bg-brand-darker-blue p-6"
            >
              <div className="col-span-1">
                <a
                  key={item.button[0].href}
                  href={item.button[0].href}
                  target={item.button[0].target || '_blank'}
                  aria-label={item.picture[0].fallback.alt}
                  rel="noreferrer"
                >
                  <Picture
                    sources={item.picture[0].sources}
                    fallback={item.picture[0].fallback}
                    cssClasses={mergeClassNames(
                      'max-h-20 w-48',
                      item.picture[0].cssClasses || ''
                    )}
                  />
                </a>
              </div>
              <div className="col-span-2 text-brand-aqua">
                <div className="divider-y absolute top-0 bottom-0 my-3" />
                <div className={'pl-8'}>
                  <p className={'sub-title pb-2 font-bold text-white'}>
                    {item.title}
                  </p>
                  {item.body.map((paragraph) => (
                    <p key={paragraph._uid}>{paragraph.content}</p>
                  ))}
                </div>
              </div>
              <div className="col-span-1">
                <Button
                  additionalClassNames={
                    'base-button primary-button primary-button--full-rounded px-8 uppercase text-sm'
                  }
                  onClick={() => openExternalTab(item.button[0].href)}
                >
                  {item.button[0].name}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className={'mt-8 text-center lg:mt-12'}>
          <p className="text-lg font-semibold uppercase text-white">
            {disclaimer_title}
          </p>
          <div className="mx-auto max-w-xl italic text-brand-greyed">
            {disclaimer_body.map((paragraph) => (
              <p key={paragraph._uid}>{paragraph.content}</p>
            ))}
          </div>
        </div>
      </Hero>
    </section>
  );
};
export default BuySection;
