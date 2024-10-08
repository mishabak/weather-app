import { customHooks_ } from "../../hooks";
import { Icon_moon } from "../icons";

function ThemeButton() {
  const { handleSelect } = customHooks_.useTheme();

  return (
    <div>
      <Icon_moon
        onClick={handleSelect}
        className={`cursor-pointer hover:scale-105 md:size-8 fill-currentWeather stroke-textWeather brightness-75 xs:brightness-100`}
      />
    </div>
  );
}

export default ThemeButton;
