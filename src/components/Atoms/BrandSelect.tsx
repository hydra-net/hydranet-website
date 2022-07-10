import { Listbox } from '@headlessui/react';
import { mergeClassNames } from '../../helpers/styles';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { ISelectOption } from '../../interfaces';

type BrandSelectProps = {
  selectedOption: ISelectOption;
  options: Array<ISelectOption>;
  onChange: (value: ISelectOption) => void;
};
const BrandSelect = ({
  selectedOption,
  options,
  onChange,
}: BrandSelectProps) => {
  const [currentSelected, setCurrentSelected] = useState<ISelectOption>('');

  const handleChange = (option: ISelectOption) => {
    setCurrentSelected(option);
    onChange(option);
  };

  useEffect(() => {
    setCurrentSelected(selectedOption ? selectedOption : options[0]);
  }, []);

  return (
    <Listbox value={currentSelected} onChange={handleChange}>
      <div className="relative mt-1 mb-4">
        <Listbox.Button
          className={mergeClassNames(
            options.length > 1
              ? 'cursor-pointer pl-3 text-left'
              : 'cursor-default pl-0 text-center',
            'relative w-full rounded-lg bg-brand-light-blue py-2 text-sm font-medium shadow-md',
            ' focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75  focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-base'
          )}
        >
          <span className="block text-white">{currentSelected}</span>
          {options.length > 1 && (
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
          )}
        </Listbox.Button>
        {options.length > 1 && (
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-brand-blue text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active
                      ? 'bg-brand-blue text-brand-greyed hover:bg-white/[0.12] hover:text-white'
                      : 'text-brand-greyed'
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate font-medium ${
                        selected ? 'text-brand-light-blue' : ''
                      }`}
                    >
                      {option}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-light-blue">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        )}
      </div>
    </Listbox>
  );
};

export default BrandSelect;
