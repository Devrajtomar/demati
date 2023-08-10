import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { data, navbar } from "../../states/states";
import { useSnapshot } from "valtio";

const Searchbar = () => {
  useSnapshot(navbar);
  const query = navbar.searchQuery;
  const setQuery = (value) => {
    navbar.searchQuery = value;
  };
  const handelSearch = () => {
    if (query !== "") {
      navbar.selectedTab = "SearchResults";
    }
  };
  const deleteSearch = () => {
    if (query !== "") {
      navbar.searchQuery = "";
      navbar.selectedTab = "Home";
    }
  };
  const Options = [];
  for (let i = 0; i < data.products.length; i++) {
    Options.push(data.products[i].title);
  }
  for (let i = 0; i < data.categories.length; i++) {
    Options.push(data.categories[i]);
  }
  const filteredOptions =
    query === ""
      ? []
      : [
          ...Options.filter((option) =>
            option
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, "")),
          ),
        ];

  return (
    <div className="searchbar">
      <Combobox>
        <Combobox.Input
          className="searchbar_input"
          displayValue={query}
          placeholder="Search here"
          onChange={(event) => setQuery(event.target.value)}
        />
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Combobox.Options className="absolute top-[100%] left-0 mt-1 max-h-52 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredOptions.length === 0 && query !== "" ? (
              <div className=" cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredOptions.map((value) => (
                <div key={value}>
                  <Combobox.Option
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    onClick={(() => setQuery(value), handelSearch)}
                    value={value}
                  >
                    {value}
                  </Combobox.Option>
                </div>
              ))
            )}
          </Combobox.Options>
        </Transition>
        {navbar.selectedTab === "SearchResults" && (
          <div type="submit" onClick={deleteSearch} className="search_icon">
            <AiOutlineClose size={24} />
          </div>
        )}
        <div type="submit" onClick={handelSearch} className="search_icon">
          Search
        </div>
      </Combobox>
    </div>
  );
};
export default Searchbar;
