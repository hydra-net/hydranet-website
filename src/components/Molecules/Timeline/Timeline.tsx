import TimelineItem from '../../Atoms/TimelineItem';
import { useState } from 'react';
import Tabs, { Tab } from '../Tabs';
import { ROADMAP_TABS_CONTENT, ROADMAP_TABS_HEADER } from './content';
import { TABS_VALUES } from '../../../enums';

const Timeline = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(ROADMAP_TABS_HEADER[1]);

  /**
   * Handler to selected change tab for the Timeline
   * @param tab
   */
  const onClickChangeTab = (tab: Tab) => setCurrentTab(tab);

  return (
    <div className="mx-auto h-full w-full">
      <div id={'roadmap-tabs'} className="mb-8 sm:mb-12">
        <Tabs
          tabs={ROADMAP_TABS_HEADER}
          currentTab={currentTab}
          onClickChangeTab={onClickChangeTab}
        />
      </div>
      <div className="wrap relative h-full  pl-8 md:overflow-hidden md:p-0">
        <div className="border-2-2 absolute left-0 h-full border border-brand-light-blue md:left-[50%]" />
        {ROADMAP_TABS_CONTENT[currentTab.value as TABS_VALUES].map(
          (item, index) => (
            <TimelineItem
              key={`${index}-${Math.random() * 9999}`}
              {...item}
              additionalInfo={TABS_VALUES[currentTab.value]}
              side={index % 2 === 0 ? 'left' : 'right'}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Timeline;
