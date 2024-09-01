import { Link } from "react-router-dom";
import { Icon_Sun } from "../components/icons";
import { ThemeButton } from "../components";
function Header() {
  return (
    <header className=" fixed top-0 backdrop-blur-md bg-transparent z-10 sm:h-12 md:h-16  h-12 shadow-lg w-full flex items-center justify-between px-5 md:px-7 lg:px-10">
      <div className="flex items-center gap-9 text-currentWeather text-[13px] md:text-base">
        <Link
          to={"/weather"}
          className="flex items-center gap-2 cursor-pointer group font-bold md:gap-3 lg:gap-4  "
        >
          <Icon_Sun className="w-7 md:w-10 fill-currentWeather  group-hover:rotate-12  group-hover:scale-105 duration-200 " />
          WEATHER APP
        </Link>

        <Link
          className="font-light hover:scale-105 hover:font-semibold duration-150"
          to={"/list"}
        >
          LIST
        </Link>
      </div>
      <ThemeButton />
    </header>
  );
}

export default Header;
