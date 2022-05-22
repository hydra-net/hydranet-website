import { CheckIcon, LockClosedIcon, XIcon } from '@heroicons/react/outline';

const features = [
  {
    name: 'Lorem Ipsum Title',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Lorem Ipsum Title',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Lorem Ipsum Title',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Lorem Ipsum Title',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Lorem Ipsum Title',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Lorem Ipsum Title',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Lorem Ipsum Title',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Lorem Ipsum Title',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
];

const CurrentFacts = () => {
  return (
    <div className="w-full rounded-md bg-brand-blue p-5 text-center drop-shadow-xl">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:py-8 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Tempor tellus in aliquet
          </h2>
          <p className="mt-4 text-lg text-brand-greyed">
            Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
            quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce
            orci in quis amet. Sit in et vitae
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, index) => (
            <div key={feature.name} className="relative">
              <dt>
                {index % 2 === 0 ? (
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <XIcon className="absolute h-6 w-6 text-brand-red" />
                )}
                <p className="ml-9 text-left text-lg font-medium leading-6 text-white">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-left text-base text-brand-greyed">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default CurrentFacts;
