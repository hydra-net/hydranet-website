import { useState } from 'react';
import { mergeClassNames } from '../../helpers/styles';

type BannerProps = {
  text: string;
  mobileText: string;
  callbackUrl?: string;
  callbackText?: string;
  bgColor: string;
};
/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';

const Banner = ({
  text,
  mobileText,
  bgColor,
  callbackText,
  callbackUrl,
}: BannerProps) => {
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(true);

  const handleClick = () => setIsBannerVisible(!isBannerVisible);
  return (
    <div
      className={mergeClassNames(bgColor, isBannerVisible ? 'block' : 'hidden')}
    >
      <div className="mx-auto max-w-7xl py-2 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col flex-wrap items-center justify-between md:flex-row">
          <div className="ml-auto md:hidden">
            <button
              type="button"
              className="-mr-1 flex rounded-md hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={handleClick}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-1 items-center md:w-0">
            <span className="flex rounded-lg bg-transparent p-2">
              <SpeakerphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="false"
              />
            </span>
            <p className="text-md text-md text-md ml-2 font-semibold text-white">
              <span className="md:hidden">{mobileText}</span>
              <span className="hidden md:inline">{text}</span>
            </p>
          </div>
          {callbackText && callbackUrl ? (
            <span className="block pb-2 sm:mr-2 sm:inline-block md:pb-0">
              <a
                href={callbackUrl}
                className="font-bold text-white underline hover:opacity-70"
                target={'_blank'}
                aria-label={callbackText}
                rel="noreferrer"
              >
                {callbackText}
                <ArrowNarrowRightIcon className="ml-1 inline-block h-6 w-6 text-white" />
              </a>
            </span>
          ) : null}
          <div className="order-4 hidden flex-shrink-0 sm:ml-3 md:block">
            <button
              type="button"
              className="-mr-1 flex rounded-md hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={handleClick}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
