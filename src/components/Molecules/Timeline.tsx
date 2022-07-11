import { useEffect, useRef, useState } from 'react';
import TimelineItem from '../Atoms/TimelineItem';
import Tabs from './Tabs';
import BrandSelect from '../Atoms/BrandSelect';

import {
  IRoadmapYear,
  ITabHeader,
  ITimelineItem,
} from '../../storyblok/models/ITab';
import { ISelectOption } from '../../interfaces';
import { YearlyQuarters } from '../../enums';

type TimelineProps = {
  years: Array<string>;
  yearlyRoadmaps: Array<IRoadmapYear>;
  headers: Array<ITabHeader>;
  errorTimelineMessage: string;
};

const Timeline = ({
  years,
  yearlyRoadmaps,
  headers,
  errorTimelineMessage,
}: TimelineProps) => {
  const isInitialMount = useRef(true);

  const [currentRoadMap, setCurrentRoadMap] = useState<IRoadmapYear>();

  const [currentSelectedYear, setCurrentSelectedYear] =
    useState<ISelectOption>('');

  const [currentTabHeader, setCurrentTabHeader] = useState<ITabHeader>();

  const [currentTabContent, setCurrentTabContent] =
    useState<Array<ITimelineItem>>();

  /**
   * Will feed the roadmap related to the current year to the timeline
   * Will also pre-select the current tab header with the current quarter of the year
   * Will then display the roadmap content of the concerned quarter
   */
  const initTimeline = (year?: number) => {
    let roadMapRelatedToThisYear;
    const currentDate = new Date();
    const yearSelected = year || currentDate.getFullYear();

    // get the current quarter of the year
    const currentQuarter = `Q${Math.ceil(
      (currentDate.getMonth() + 1) / 3
    )}` as keyof typeof YearlyQuarters;

    try {
      // get the roadmap for the current year or assign the first of the array if not found
      roadMapRelatedToThisYear =
        yearlyRoadmaps.find(
          (roadmap) => parseInt(roadmap.yearRelated) === yearSelected
        ) || yearlyRoadmaps[0];
    } catch (err) {
      console.error('Failed to parse roadmap yearRelated');
      roadMapRelatedToThisYear = yearlyRoadmaps[0];
    }

    // will set the ITabHeader with the value of the current quarter, or assign the first one if not found
    const currentSelectedHeaderBasedOnCurrentQuarter =
      headers.find((x) => x.value === currentQuarter) || headers[0];

    setCurrentRoadMap(roadMapRelatedToThisYear);
    setCurrentTabHeader(currentSelectedHeaderBasedOnCurrentQuarter);
    setCurrentTabContent(roadMapRelatedToThisYear[currentQuarter]);
  };

  useEffect(() => {
    initTimeline();
  }, []);

  /**
   * Each time a header tab is clicked we update the current tab content with the linked header
   */
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (currentTabHeader && currentRoadMap) {
      const contentRelatedToHeader =
        currentRoadMap[currentTabHeader.value as keyof typeof YearlyQuarters];
      setCurrentTabContent(contentRelatedToHeader);
    }
  }, [currentTabHeader]);

  /**
   * Handler, when changed, we will also feed the new roadmap to the useStates
   * @param value
   */
  const handleYearChange = (value: ISelectOption) => {
    setCurrentSelectedYear(value);
    initTimeline(parseInt(value));
  };

  /**
   * Handler to selected change tab for the Timeline
   * @param tab
   */
  const onClickChangeTab = (tab: ITabHeader) => setCurrentTabHeader(tab);

  return (
    <div className="mx-auto h-full w-full">
      <div id={'roadmap-tabs'} className="mb-8 sm:mb-12">
        <div className="w-44">
          <BrandSelect
            selectedOption={currentSelectedYear}
            options={years}
            onChange={handleYearChange}
          />
        </div>

        {currentTabHeader && (
          <Tabs
            tabs={headers}
            currentTab={currentTabHeader}
            onClickChangeTab={onClickChangeTab}
          />
        )}
      </div>

      {currentTabContent?.length || 0 > 1 ? (
        <div
          className="wrap relative h-full pl-8 md:overflow-hidden md:p-0"
          key={currentSelectedYear}
        >
          <div className="border-2-2 absolute left-0 h-full border border-brand-light-blue md:left-[50%]" />
          {currentTabContent?.map((content, index) => (
            <TimelineItem
              key={content._uid}
              {...content}
              side={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      ) : (
        <div className="mt-6 flex items-center justify-center lg:mt-16">
          <p className={'text-brand-greyed'}>{errorTimelineMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Timeline;
