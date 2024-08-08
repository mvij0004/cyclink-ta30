import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const FilterSeverity = ({ label, options, onChange }) => {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (value) => {
    setSelected(value);
    console.log(`Filter changed: ${label} to ${value}`);
    onChange(value); // Call the onChange prop with the selected value
  };

  return (
    <Listbox value={selected} onChange={handleChange}>
      <Listbox.Label className="block mt-2 text-sm font-medium leading-6 text-gray-900">
        {label}
      </Listbox.Label>
      <div className="relative">
        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <span className="ml-3 block truncate">{selected}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </Listbox.Button>

        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {options.map((option, index) => (
            <Listbox.Option
              key={index}
              value={option}
              className={({ active, selected }) =>
                `relative cursor-default select-none py-2 pl-3 pr-9 ${
                  active ? "bg-indigo-600 text-white" : "text-gray-900"
                } ${selected ? "font-semibold" : "font-normal"}`
              }
            >
              {({ selected }) => (
                <>
                  <span className="block truncate">{option}</span>
                  {selected && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                      <CheckIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  )}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default FilterSeverity;
