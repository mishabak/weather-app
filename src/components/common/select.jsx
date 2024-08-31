import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import propTypes from "prop-types";

const Select = ({
  children,
  label,
  name,
  options = [],
  cback = () => alert("please define callback function for select input"),
  value,
}) => {
  return (
    <div className="relative h-fit">
      <div className="text-red-800 text-[10px] absolute  top-0 mt-[-4px]">
        {children}
      </div>
      <div className="mt-4">
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 bg-white text-black px-2 py-1 rounded-md text-[12px] min-w-28">
            {value.label || label}
            <ChevronDownIcon className="size-4 fill-white/60" />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 mt-2 origin-top-right z-[7] rounded-xl border text-[12px] backdrop-blur-md text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            {value.label && value.value && (
              <MenuItem>
                <button
                  onClick={() => cback(name, {})}
                  className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 data-[focus]:text-gray-600"
                >
                  <span className="font-semibold">Un Select</span>
                </button>
              </MenuItem>
            )}

            {options?.length > 0 &&
              options?.map((data, idx) => (
                <MenuItem key={idx}>
                  <button
                    onClick={() => cback(name, data)}
                    className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 data-[focus]:text-gray-600"
                  >
                    {data?.label}
                  </button>
                </MenuItem>
              ))}
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

Select.propTypes = {
  children: propTypes.node,
  label: propTypes.string,
  options: propTypes.array,
  cback: propTypes.func,
  name: propTypes.string,
  value: propTypes.string,
};
export default Select;
