import { Link } from "react-router-dom";
import { Icon_Sun } from "../components/icons";
import { ThemeButton } from "../components";
import { paths } from "./path";
function Header() {
  return (
    <header className=" fixed top-0 backdrop-blur-md bg-transparent z-10 sm:h-12 md:h-16  h-12 shadow-lg w-full flex items-center justify-between px-5 md:px-7 lg:px-10">
      <div
        className={`flex items-center gap-9 text-currentWeather ${
          location.pathname.includes("weather")
            ? "brightness-75"
            : "brightness-125"
        } xs:brightness-125 text-[13px] md:text-base`}
      >
        <Link
          to={"/weather"}
          className="flex items-center gap-2 cursor-pointer group font-bold md:gap-3 lg:gap-4  "
        >
          <Icon_Sun className="w-7 md:w-10 fill-currentWeather brightness-75 xs:brightness-100  group-hover:rotate-12  group-hover:scale-105 duration-200 " />
          WEATHER APP
        </Link>

        {paths.map(({ label, path }, idx) => (
          <Link
            key={idx}
            className={`font-light hover:scale-105 hover:font-semibold duration-150 ${
              location.pathname.includes(path) && `brightness-125`
            }`}
            to={path}
          >
            {label}
          </Link>
        ))}
      </div>
      <ThemeButton />
    </header>
  );
}

export default Header;
