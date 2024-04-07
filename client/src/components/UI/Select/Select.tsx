import { Listbox, Transition } from '@headlessui/react';
import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

interface SelectProps {
  list: {
    id: number,
    value: string,
    label: string,
  }[];
  placeholder?: string;
  onOptionSelect?: (option: { id: number, value: string }) => void;
  className?: string;
}

export const Select = ({
  list,
  placeholder = '',
  onOptionSelect,
  className = '',
}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<{
    id: number,
    value: string,
  } | null>(null);

  const handleOptionSelect = (id: number, value: string) => {
    const selected = { id, value };
    setSelectedOption(selected);
    if (onOptionSelect) {
      onOptionSelect(selected);
    }
  };

  return (
    <div className=''>
      <Listbox
        value={selectedOption?.value || ''}
        onChange={(value: string) => {
          const chosenOption = list.find((option) => option.value === value);
          if (chosenOption) {
            handleOptionSelect(chosenOption.id, chosenOption.value);
          }
        }}
      >
        <div className='relative'>
          <Listbox.Button
            className={`relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left focus:border-blue-700 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 sm:text-sm rounded border-2 border-solid border-[#eeeeee] ${className}`}
          >
            <span className='block truncate'>
              {selectedOption?.value || placeholder}
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[9] rounded border-2 border-solid border-[#eee]'>
              {list.map(({ id, value }) => (
                <Listbox.Option
                  key={id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={value}
                  onClick={() => handleOptionSelect(id, value)}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {value}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
