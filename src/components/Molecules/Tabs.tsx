import { Listbox, Tab } from '@headlessui/react';
import { mergeClassNames } from '../../helpers/styles';
import { ITabHeader } from '../../storyblok/models/ITab';
import { SelectorIcon } from '@heroicons/react/solid';

type TabsProps = {
  tabs: Array<ITabHeader>;
  currentTab: ITabHeader;
  onClickChangeTab: (tab: ITabHeader) => void;
};

const Tabs = ({ tabs, currentTab = tabs[0], onClickChangeTab }: TabsProps) => {
  /**
   * Handler to find the correct tab, use the index to get it
   * For mobile we have the tab value passed, but for desktop we get the index
   * Vendor Listbox send a string and TabGroup a number... we must to parseInt in case of string
   * @param value
   * @param withIndex - if the value being passed is the index instead of the tab value
   */
  const handleChange = (value: string, withIndex = false) => {
    let tab;

    if (withIndex) {
      tab = tabs[parseInt(value)];
    } else {
      tab = tabs.find((x) => x.value === value) || tabs[0];
    }

    if (tab.value !== currentTab?.value) {
      onClickChangeTab(tab);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-full sm:hidden">
        {/* MOBILE */}
        <Listbox value={currentTab.value} onChange={handleChange}>
          {({ open }) => (
            <>
              <Listbox.Button
                className={mergeClassNames(
                  'block w-full border-gray-300 bg-brand-blue py-3.5 text-white focus:border-indigo-500 focus:ring-indigo-500',
                  open ? 'rounded-t-md' : 'rounded-md',
                  tabs.length > 1
                    ? 'cursor-pointer pl-3 text-left'
                    : 'cursor-default pl-0 text-center',
                  'relative w-full rounded-lg py-2 text-sm font-medium shadow-md'
                )}
              >
                <span className="block text-base text-white">
                  {currentTab?.label || tabs[0].label}
                </span>

                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Listbox.Options className={'min-w-xl'}>
                {tabs.map((tab, index) => (
                  <Listbox.Option
                    key={`mobile-${tab._uid}`}
                    value={tab.value}
                    className={mergeClassNames(
                      'bg-brand-blue p-2.5 text-center text-brand-greyed',
                      tab.value === currentTab?.value ? 'opacity-80' : '',
                      open && index === tabs.length - 1 ? 'rounded-b-md' : ''
                    )}
                    disabled={tab.value === currentTab?.value}
                  >
                    {tab.label}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </>
          )}
        </Listbox>
      </div>
      {/* SM */}
      <div className={'hidden w-full sm:flex'}>
        <Tab.Group
          defaultIndex={tabs.findIndex((x) => x.value === currentTab?.value)}
          onChange={(evt) => handleChange(evt.toString(), true)}
        >
          <Tab.List className="flex w-full space-x-1 rounded-xl bg-brand-blue">
            {tabs.map((tab) => (
              <Tab
                key={tab._uid}
                className={({ selected }) =>
                  mergeClassNames(
                    'paragraph w-full rounded-lg py-3.5 font-medium leading-5 tracking-wider text-white transition-colors duration-300',
                    'focus:outline-none focus:ring-2 focus:ring-brand-aqua',
                    selected
                      ? 'bg-brand-light-blue shadow'
                      : 'text-brand-greyed hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {tab.label}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
    </div>
  );
};
export default Tabs;
