import { useState } from 'react';
import { mergeClassNames } from '../../helpers/styles';
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';

type BannerProps = {
  text: string;
  mobileText: string;
  callbackUrl?: string;
  callbackText?: string;
  bgColor: string;
};

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
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col flex-wrap items-center justify-between sm:flex-row">
          <div className="ml-auto sm:hidden">
            <button
              type="button"
              className="-mr-1 flex rounded-md hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={handleClick}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-1 items-center sm:w-0">
            <span className="flex hidden rounded-lg bg-transparent sm:block">
              <SpeakerphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="false"
              />
            </span>
            <p className="text-md ml-2 font-semibold text-white sm:text-lg">
              <span className="sm:hidden">{mobileText}</span>
              <span className="hidden pr-6 sm:block">{text}</span>
            </p>
          </div>
          {callbackText && callbackUrl ? (
            <span className="block pb-2 sm:mr-2 sm:inline-block md:pb-0">
              <a
                href={callbackUrl}
                className="sm:text-md font-bold text-white underline hover:opacity-70"
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
