import Hero from '../Molecules/Hero';
import ContentSwap from '../Molecules/ContentSwap';
import Caption from '../Atoms/Caption';
import { IAppSection } from '../../interfaces';
import Accordion from '../Molecules/Accordion';
import Link from 'next/link';
import { IProduct } from '../../storyblok/models/IProduct';
import Picture from '../Atoms/Picture';
import { mergeClassNames } from '../../helpers/styles';
import { defineSourceType } from '../../helpers/common';

export type ProductsSectionProps = {
  products: Array<IProduct>;
};
const ProductsSection = ({
  id,
  products,
}: IAppSection & ProductsSectionProps) => (
  <section id={id} className="w-full">
    <Hero
      dividerClassRef={'bg-divider-dex top-0 transform rotate-y-180'}
      className={'bg-brand-darkest-blue'}
    >
      <div className={'pt-20 xl:pt-[100px]'} />
      {/* DEX */}
      {products.map((product, index) => (
        <>
          <ContentSwap
            key={product._uid}
            side={index % 2 === 0 ? 'right' : 'left'}
            aSideContent={
              <Picture
                sources={product.picture[0].sources}
                fallback={product.picture[0].fallback}
                cssClasses={
                  product.picture[0].cssClasses ||
                  'mx-auto w-full max-w-sm rounded-lg md:max-w-md lg:ml-auto lg:mr-0 lg:max-w-lg xl:max-w-3xl'
                }
              />
            }
            bSideContent={
              <>
                <Caption
                  hashLabel={product.caption[0].hashLabel}
                  title={product.caption[0].title}
                />
                <div className={'font-light text-brand-greyed'}>
                  {product.body.map((paragraph, idx) => (
                    <p
                      key={paragraph._uid}
                      className={mergeClassNames(
                        paragraph.cssClasses || '',
                        idx !== 0 ? 'spaced' : ''
                      )}
                    >
                      {paragraph.content}
                    </p>
                  ))}

                  <div className="mt-4 text-center">
                    <div className="my-8 text-center">
                      <Link href={product.link[0].href}>
                        <a
                          className={mergeClassNames(
                            'base-button primary-button px-6 text-sm uppercase',
                            product.link[0].cssClasses
                          )}
                        >
                          {product.link[0].name}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            }
          />
          <div className="mx-auto mt-8 max-w-6xl space-y-6 lg:mt-16 lg:space-y-8">
            {product.showcase_items?.map((item) => (
              <Accordion
                key={item._uid}
                title={item.title}
                content={
                  <>
                    <video
                      width="100%"
                      autoPlay={true}
                      muted
                      loop
                      className={'rounded-md'}
                    >
                      {item.media[0].sources.map((source) => (
                        <source
                          key={source.id}
                          src={source.filename}
                          type={defineSourceType(source.filename, 'video')}
                        />
                      ))}
                      <img
                        src={item.media[0].fallback.filename}
                        alt={item.media[0].fallback.alt}
                        title="Error while trying to display the video"
                        className={item.media[0].cssClasses}
                      />
                    </video>
                    {item.link && (
                      <span className="mt-4 block text-right">
                        <Link href={item.link[0].href}>
                          <a
                            target={item.link[0].target}
                            rel="noreferrer"
                            className={
                              item.link[0].cssClasses ||
                              'text-sm font-medium text-brand-aqua hover:text-brand-light-blue'
                            }
                          >
                            {item.link[0].name}
                            {item.link[0].target === '_blank' && (
                              <i className={'fa-solid fa-external-link ml-1'} />
                            )}
                          </a>
                        </Link>
                      </span>
                    )}
                  </>
                }
              />
            ))}
          </div>
        </>
      ))}
    </Hero>
  </section>
);
export default ProductsSection;
