import { useEffect, useState } from 'react';

import Tabs from '../Molecules/Tabs';

import { IAppSection } from '../../interfaces';
import { mergeClassNames } from '../../helpers/styles';
import {
  IDexTab,
  IDexTabContent,
  ITabHeader,
} from '../../storyblok/models/ITab';
import Picture from '../Atoms/Picture';

export type DexDownloadSectionProps = {
  title: string;
  tabs: Array<IDexTab>;
};
const DexDownloadSection = ({
  id,
  title,
  tabs,
}: IAppSection & DexDownloadSectionProps) => {
  const [currentTabHeader, setCurrentTabHeader] = useState<ITabHeader>();
  const [currentTabContent, setCurrentTabContent] = useState<IDexTabContent>();

  useEffect(() => {
    const defaultSelected = tabs[0].headers.find((header) => header.isSelected);
    if (defaultSelected) {
      setCurrentTabHeader(defaultSelected);
    } else {
      setCurrentTabHeader(tabs[0].headers[0]);
    }
  }, []);

  useEffect(() => {
    const relatedTabContent = tabs[0].content.find((item) => {
      return item.tabLinkedValue === currentTabHeader?.value;
    });
    if (relatedTabContent) {
      setCurrentTabContent(relatedTabContent);
    } else {
      setCurrentTabContent(tabs[0].content[0]);
    }
  }, [currentTabHeader?.value]);

  /**
   * Handler to selected change tab for the Timeline
   * @param tab
   */
  const onClickChangeTab = (tab: ITabHeader) => {
    setCurrentTabHeader(tab);
  };

  return (
    <div id={id} className={'dex-section mx-auto max-w-3xl bg-transparent'}>
      <div>
        <pre
          className={
            'py-6 text-center text-2xl font-semibold text-white md:text-3xl'
          }
        >
          {title}
        </pre>
        <Tabs
          tabs={tabs[0].headers}
          currentTab={currentTabHeader}
          onClickChangeTab={onClickChangeTab}
        />
        <div
          key={currentTabHeader?.value}
          data-aos={'fade-up'}
          className={'mt-4 md:mt-12 md:min-h-[18rem]'}
        >
          {currentTabContent?.body?.map((paragraph, index) => (
            <p
              key={paragraph._uid}
              className={mergeClassNames(
                index === 0 ? '' : 'mt-2',
                'text-center text-brand-greyed'
              )}
            >
              {paragraph.content}
            </p>
          ))}

          <div className="mx-auto mt-3 grid w-48 grid-cols-1 sm:w-96 sm:grid-cols-2 sm:gap-8 md:w-full md:max-w-lg md:grid-cols-2">
            {currentTabContent?.links.map((downloadLink) => (
              <a
                key={downloadLink._uid}
                href={
                  downloadLink.isDisabled
                    ? undefined
                    : downloadLink.link[0]?.href
                }
                target={'_blank'}
                download={true}
                className={mergeClassNames(
                  'base-button download-button m-3',
                  downloadLink.isDisabled ? 'download-button--disabled' : ''
                )}
                rel="noreferrer"
              >
                <span className="flex items-center justify-center space-x-3">
                  <Picture
                    sources={downloadLink.picture![0]?.sources}
                    fallback={downloadLink.picture![0]?.fallback}
                    cssClasses={downloadLink.picture![0].cssClasses || 'w-6'}
                  />
                  <p>{downloadLink.link[0]?.name}</p>
                </span>
              </a>
            ))}
          </div>

          {currentTabContent?.warning && (
            <div className="mx-auto mt-4 max-w-lg text-center font-bold text-brand-red underline md:mt-8">
              <p>{currentTabContent.warning}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default DexDownloadSection;
