import { useState } from 'react';

import Tabs, { Tab } from '../Molecules/Tabs';

import {
  DEX_DOWNLOAD_TABS_CONTENT,
  DEX_DOWNLOAD_TABS_HEADER,
} from './DexDownloadSection/content';
import { DEX_DOWNLOAD_TABS_VALUES } from '../../enums';
import { IAppSection } from '../../interfaces';

const DexDownloadSection = ({ id }: IAppSection) => {
  const [currentTab, setCurrentTab] = useState<Tab>(
    DEX_DOWNLOAD_TABS_HEADER[0]
  );

  /**
   * Handler to selected change tab for the Timeline
   * @param tab
   */
  const onClickChangeTab = (tab: Tab) => setCurrentTab(tab);

  return (
    <div id={id} className={'dex-section mx-auto max-w-3xl bg-transparent'}>
      <div>
        <pre
          className={
            'py-6 text-center text-2xl font-semibold text-white md:text-3xl'
          }
        >
          Builds
        </pre>
        <Tabs
          tabs={DEX_DOWNLOAD_TABS_HEADER}
          currentTab={currentTab}
          onClickChangeTab={onClickChangeTab}
        />
        <div
          key={currentTab.value}
          data-aos={'fade-up'}
          className={'min-h-[18rem]'}
        >
          <p className={'mt-4 text-center text-brand-greyed md:mt-12'}>
            {
              DEX_DOWNLOAD_TABS_CONTENT[
                currentTab.value as DEX_DOWNLOAD_TABS_VALUES
              ].description
            }
          </p>

          <div className="mx-auto mt-3 grid w-48 grid-cols-1 sm:w-96 sm:grid-cols-2 sm:gap-8 md:w-full md:max-w-lg md:grid-cols-2">
            {DEX_DOWNLOAD_TABS_CONTENT[
              currentTab.value as DEX_DOWNLOAD_TABS_VALUES
            ].links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target={'_blank'}
                className={'base-button download-button m-3'}
                rel="noreferrer"
              >
                <span className="flex items-center justify-center space-x-3">
                  <img
                    src={`/${link.os.toLowerCase()}.svg`}
                    className={'w-6'}
                    alt={`${link.os} distribution`}
                  />
                  <p>{link.os}</p>
                </span>
              </a>
            ))}
          </div>
          <div className="mx-auto mt-4 max-w-lg text-center font-bold text-brand-red underline md:mt-8">
            <p>
              Have a look at the current limitations of our DEX at the end of
              the page, we just arrived in the scaling phase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DexDownloadSection;
