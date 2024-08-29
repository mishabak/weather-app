import { CustomIcons_ } from "../assets/icons/icon";
import { customHooks_ } from "../hooks";

function Header() {
  const { goToHome } = customHooks_.useLayout();
  return (
    <header className="fixed top-0 backdrop-blur-md bg-transparent z-10  h-12 shadow-lg w-full flex items-center justify-between px-3">
      <span
        onClick={goToHome}
        className="flex items-center gap-1 text-black cursor-pointer group"
      >
        <CustomIcons_.Sun
          className="w-6 group-hover:rotate-12  group-hover:scale-105 duration-100"
          fill="black"
        />
        &nbsp;Weather App
      </span>
    </header>
  );
}

export default Header;
