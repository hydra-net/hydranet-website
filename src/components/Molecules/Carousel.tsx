import { useEffect, useMemo, useRef, useState } from 'react';
import { mergeClassNames } from '../../helpers/styles';
import { ITestimonial } from '../../storyblok/models/ITestimonial';

type CarouselProps = {
  testimonials: Array<ITestimonial>;
  additionalClasses: string;
  timer?: number;
  animationAnchor?: string;
};
const Carousel = ({
  testimonials,
  additionalClasses,
  timer = 7000,
  animationAnchor = '',
}: CarouselProps) => {
  const initialTestimonialState = useMemo(
    () => testimonials[0],
    [testimonials]
  );

  const [currentTestimonial, setCurrentTestimonial] = useState<ITestimonial>(
    initialTestimonialState
  );
  const testimonialRef = useRef(initialTestimonialState);

  useEffect(() => {
    testimonialRef.current = currentTestimonial;
  }, [currentTestimonial]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(getNextTestimonial());
    }, timer);

    return () => clearInterval(interval);
  }, []);

  const getNextTestimonial = () => {
    // last item reset carousel
    if (parseInt(testimonialRef.current.order) === testimonials.length - 1) {
      return testimonials[0];
    } else {
      return testimonials[parseInt(testimonialRef.current.order) + 1];
    }
  };
  return (
    <div className={`overflow-hidden ${additionalClasses}`}>
      <img
        className="absolute inset-0 h-full w-full object-cover "
        key={currentTestimonial?.backgroundImage?.id + Math.random() * 999}
        src={currentTestimonial?.backgroundImage?.filename}
        data-aos={'zoom-in'}
        data-aos-anchor={animationAnchor}
        alt={currentTestimonial?.backgroundImage?.alt}
      />
      <div className="absolute inset-0 bg-brand-greyed mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-medium-blue via-brand-darkest-blue opacity-90" />
      <div className="relative px-2 md:px-8">
        <blockquote className="mt-8">
          <div className="relative text-lg font-medium text-white md:flex-grow">
            {/* quote icon */}
            <div
              className={mergeClassNames(
                'text-brand-aqua',
                currentTestimonial?.quoteUrl
                  ? 'cursor-pointer hover:text-brand-light-blue'
                  : ''
              )}
            >
              <a
                href={
                  currentTestimonial?.quoteUrl
                    ? currentTestimonial?.quoteUrl.url
                    : undefined
                }
                target={'_blank'}
                rel="noreferrer"
              >
                <svg
                  className="absolute -top-6 left-2 h-8 w-8 -translate-x-3 -translate-y-2 transform sm:left-0"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </a>
            </div>
            <div className={'italic'}>
              {currentTestimonial?.body.map((paragraph) => (
                <p
                  key={paragraph._uid}
                  className={'mb-1'}
                  data-aos={'fade-left'}
                  data-aos-delay={'500'}
                  data-aos-anchor={animationAnchor}
                >
                  {paragraph.content}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <p
              className="font-semibold text-brand-aqua"
              key={`${currentTestimonial?._uid}-${currentTestimonial?.author}`}
              data-aos={'fade-left'}
              data-aos-delay={'500'}
              data-aos-anchor={animationAnchor}
            >
              {currentTestimonial?.author}
            </p>
          </div>
        </blockquote>
      </div>
    </div>
  );
};
export default Carousel;
