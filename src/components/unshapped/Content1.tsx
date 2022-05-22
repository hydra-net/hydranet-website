import Caption from '../Atoms/Caption';

const metrics = [
  {
    id: 1,
    stat: 'XX',
    emphasis: 'Lorem ipsum',
    rest: 'use laoreet amet lacus nibh integer quis.',
  },
  {
    id: 2,
    stat: 'XX',
    emphasis: 'Lorem ipsum',
    rest: 'lacus nibh integer quis.',
  },
  {
    id: 3,
    stat: 'XX',
    emphasis: 'Lorem ipsum',
    rest: 'laoreet amet lacus nibh integer quis.',
  },
  {
    id: 4,
    stat: 'XX',
    emphasis: 'Lorem ipsum',
    rest: 'lacus nibh integer quis.',
  },
];

const Content1 = () => {
  return (
    <div className="relative bg-brand-darker-blue">
      <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="hidden h-full w-full xl:grid xl:grid-cols-2">
          <div className="flex h-full items-center justify-center xl:relative xl:col-start-2">
            <div className="w-56">
              <picture>
                <source srcSet={'/hydranet-logo.svg'} type={'image/svg+xml'} />
                <source srcSet={'/hydranet-logo.png'} type={'image/jpg'} />
                <img
                  src="/hydranet-logo.png"
                  alt={'hydranet'}
                  className={'w-full'}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl lg:max-w-7xl xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <div className="relative xl:col-start-1 xl:pb-0">
          <Caption
            hashLabel={'Lorem Ipsum'}
            title={'Tempor tellus in aliquet et vitae'}
          />
          <p className="mt-5 text-brand-greyed">
            Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
            quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce
            orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet
            amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">
                  {item.stat}
                </span>
                <span className="mt-1 block text-base text-brand-greyed">
                  <span className="font-medium text-white">
                    {item.emphasis}
                  </span>{' '}
                  {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content1;
