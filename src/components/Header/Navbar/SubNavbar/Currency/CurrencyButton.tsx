"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";

const currencies = [
  { name: "BRL / R$" },
  { name: "USD / $" },
  { name: "EUR / €" },
  { name: "GBP / GBP£" },
  { name: "CAD / CA$" },
  { name: "MXN / $MXN" },
];

export default function CurrencyButton() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selected, setSelected] = useState(currencies[0]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1 w-50">
        <Listbox.Button className="relative transition-colors duration-500 w-full cursor-default rounded-lg bg-violet-200 dark:bg-slate-600 py-2 pl-6 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-300 sm:text-sm">
          <span className="block truncate text-slate-950 dark:text-gray-300">
            {selected.name}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ExpandMoreIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute flex flex-col items-center mt-1 max-h-60 w-full overflow-auto rounded-md bg-violet-200 dark:bg-slate-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {currencies.map((currency, currencyIdx) => (
              <Listbox.Option
                key={currencyIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 w-11/12 rounded-md ${
                    active
                      ? "bg-violet-300 dark:bg-slate-800 text-amber-900"
                      : "text-slate-950 dark:text-gray-300"
                  }`
                }
                value={currency}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {currency.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-violet-400">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
