import { DEX_DOWNLOAD_LINKS } from '../../constants';

const DexDownload = () => (
  <div className={'mx-auto max-w-3xl bg-transparent'}>
    <div>
      <pre
        className={
          'mb-2 pt-8 text-center text-2xl text-4xl font-semibold text-white'
        }
      >
        Testnet build
      </pre>
      <p className={'mt-4 text-center text-brand-greyed'}>
        The Hydranet DEX is currently in testnet only, once we are confident
        about everything, we will move to mainnet version (TBD).
      </p>
    </div>

    <div className="mx-auto mt-3 grid w-48 grid-cols-1 sm:w-96 sm:grid-cols-2 sm:gap-8 md:w-full md:max-w-lg md:grid-cols-2">
      <a
        href={DEX_DOWNLOAD_LINKS.windows}
        target={'_blank'}
        className={'primary-button m-3'}
        rel="noreferrer"
      >
        <span className="flex items-center justify-center space-x-3">
          <img
            src={'./windows.svg'}
            className={'w-6'}
            alt={'windows distribution'}
          />
          <p>Windows</p>
        </span>
      </a>
      <a
        href={DEX_DOWNLOAD_LINKS.linux}
        target={'_blank'}
        className={'primary-button m-3'}
        rel="noreferrer"
      >
        <span className="mx-auto flex items-center justify-center space-x-3">
          <img
            src={'./linux.svg'}
            className={'w-6'}
            alt={'linux distribution'}
          />
          <p>Linux</p>
        </span>
      </a>
    </div>
    <p className={'mt-4 text-center font-bold text-brand-red underline'}>
      Please don't send real funds for using this version.
    </p>
  </div>
);
export default DexDownload;
