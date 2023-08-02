import React, { Fragment } from "react";
import { Menu } from "@headlessui/react";
import { AiOutlineDown } from "react-icons/ai";
import { useSnapshot } from "valtio";
import { navbar } from "../states/states";

const Category = ({ defaultvalue, options }) => {
  const state = useSnapshot(navbar);
  const selectedCategory = navbar.selectedCategory;
  const setCategory = (name) => (navbar.selectedCategory = name);
  const setSidebar = () => (navbar.isOpen = false);
  // const subCategory = navbar.subCategory;
  // const setCategoryID = () => navbar.selectedCategoryID + 1;
  // const setSubCategory = (name) => (navbar.subCategory = name);
  return (
    <div className="w-full">
      <Menu>
        <Menu.Button className="w-full">
          <div
            className={`menu_item justify-between ${
              selectedCategory === defaultvalue && "selectedCategory"
            }`}
            onClick={() => {
              setCategory(defaultvalue);
              setSidebar();
            }}
          >
            <pre>{defaultvalue}</pre>

            <div>{/* <AiOutlineDown /> */}</div>
          </div>
        </Menu.Button>

        {/* <Menu.Items>
          {options.map((category) => (
            <Menu.Item key={category.Name} as={Fragment}>
              <pre
                className={`menu_item ${
                  subCategory === category.Name && "selectedCategory"
                }`}
                onClick={() => setSubCategory(category.Name)}
              >
                {category.Name}
              </pre>
            </Menu.Item> 
          ))}
        </Menu.Items>*/}
      </Menu>
    </div>
  );
};

export default Category;
