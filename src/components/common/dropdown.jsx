import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import propTypes from "prop-types";

function Dropdown({ label, items = [], cback = () => {}, selected = {} }) {
  return (
    <Menu
      as="div"
      className="
      relative inline-block
      text-left items-center"
    >
      <div>
        <MenuButton
          className="
          inline-flex w-full
          justify-center items-center
          gap-x-1.5 px-3 py-2
          text-[16.59px] "
        >
          {label}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5" />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="
        absolute left-0 z-10 
        transition focus:outline-none 
        rounded-md today-radial shadow-lg 
        data-[closed]:scale-95 data-[closed]:transform 
        data-[closed]:opacity-0 data-[enter]:duration-100 
        data-[leave]:duration-75 data-[enter]:ease-out 
        ring-1 ring-black ring-opacity-5 
        mt-2 w-32 px-2  origin-top-right 
        data-[leave]:ease-in"
      >
        {items.map((data, idx) => {
          return (
            <div key={idx} className="px-3 py-1 text-textWeather">
              <MenuItem>
                <div
                  className={`${
                    data?.name == selected?.name ? `text-gray-500` : ""
                  }`}
                  onClick={() => cback(data)}
                >
                  {data?.name}
                </div>
              </MenuItem>
            </div>
          );
        })}
      </MenuItems>
    </Menu>
  );
}

Dropdown.propTypes = {
  items: propTypes.array,
  cback: propTypes.func,
  selected: propTypes.object,
  label: propTypes.string,
};

export default Dropdown;
