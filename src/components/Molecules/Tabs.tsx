import { Listbox, Tab } from '@headlessui/react';
import { mergeClassNames } from '../../helpers/styles';
import { ITabHeader } from '../../storyblok/models/ITab';

type TabsProps = {
  tabs: Array<ITabHeader>;
  currentTab?: ITabHeader;
  onClickChangeTab: (tab: ITabHeader) => void;
};

const Tabs = ({ tabs, currentTab, onClickChangeTab }: TabsProps) => {
  /**
   * Handler to find the correct tab, use the index to get it
   * For mobile we have the enum that is referenced as same as the index
   * Vendor Listbox send a string and TabGroup a number... we must to parseInt in case of string
   * @param index
   */
  const handleChange = (index: string | number) => {
    const tab = tabs[typeof index === 'string' ? parseInt(index) : index];
    if (tab.value !== currentTab?.value) {
      onClickChangeTab(tab);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:hidden">
        <Listbox
          value={currentTab?.value || tabs[0].value}
          onChange={handleChange}
        >
          {({ open }) => (
            <>
              <Listbox.Button
                className={mergeClassNames(
                  'block w-full border-gray-300 bg-brand-blue py-2.5 text-white focus:border-indigo-500 focus:ring-indigo-500',
                  open ? 'rounded-t-md' : 'rounded-md'
                )}
              >
                {currentTab?.label || tabs[0].label}
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
      <div className={'hidden w-full sm:flex'}>
        <Tab.Group
          defaultIndex={
            tabs.findIndex((x) => x.value === currentTab?.value) || 1
          }
          onChange={handleChange}
        >
          <Tab.List className="flex w-full space-x-1 rounded-xl bg-brand-blue">
            {tabs.map((tab) => (
              <Tab
                key={tab._uid}
                tabIndex={0}
                className={({ selected }) =>
                  mergeClassNames(
                    'paragraph w-full rounded-lg py-3.5 font-medium leading-5 tracking-wider text-white transition-colors duration-300',
                    'focus:outline-none',
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
