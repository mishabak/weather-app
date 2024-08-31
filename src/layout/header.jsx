import { Link } from "react-router-dom";
import { Icon_Sun } from "../components/icons";
function Header() {
  return (
    <header className="fixed top-0 backdrop-blur-md bg-transparent z-10 sm:h-12 md:h-16  h-12 shadow-lg w-full flex items-center justify-between px-3">
      <div className="flex items-center gap-9">
        <Link
          to={"/weather"}
          className="flex items-center gap-1 text-black cursor-pointer group font-bold"
        >
          <Icon_Sun
            className="w-7 md:w-10  group-hover:rotate-12  group-hover:scale-105 duration-200 "
            fill="black"
          />
          &nbsp;WEATHER APP
        </Link>
        |
        <Link
          className="font-light hover:scale-105 hover:font-semibold duration-150"
          to={"/list"}
        >
          LIST
        </Link>
      </div>
    </header>
  );
}

export default Header;
