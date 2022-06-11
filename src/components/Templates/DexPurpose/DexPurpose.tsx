import Caption from '../../Atoms/Caption';
import Carousel from '../../Molecules/Carousel';
import { TESTIMONIALS } from './content';

const DexPurpose = () => {
  return (
    <div className="relative bg-brand-darker-blue">
      <div className="flex flex-col-reverse sm:gap-12 sm:gap-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start">
        <div className="relative md:pb-20 lg:pb-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-brand-darkest-blue lg:right-24 xl:right-48" />
            {/* Dots grid */}
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-brand-greyed"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            {/* Testimonials */}
            <Carousel
              testimonials={TESTIMONIALS}
              animationAnchor={'#dex-page'}
              additionalClasses={
                'rounded-2xl pb-10 pt-12 shadow-xl md:relative lg:pt-64'
              }
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-md sm:max-w-3xl">
          {/* Content area */}
          <div>
            <Caption
              hashLabel={'First woldwide'}
              title={'On a mission to deliver true decentralization'}
            />
            <div className="mt-6 space-y-6 text-brand-greyed">
              <p>
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                senectus vitae.
              </p>
              <p>
                Sollicitudin tristique eros erat odio sed vitae, consequat
                turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros
                eu viverra donec ut volutpat donec laoreet quam urna.
                Sollicitudin tristique eros erat odio sed vitae, consequat
                turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros
                eu viverra donec ut volutpat donec laoreet quam urna.
              </p>
              <p>
                Rhoncus nisl, libero egestas diam fermentum dui. At quis
                tincidunt vel ultricies. Vulputate aliquet velit faucibus
                semper. Pellentesque in venenatis vestibulum consectetur nibh
                id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim
                fermentum lacus in. Viverra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DexPurpose;
