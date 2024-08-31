import { customHooks_ } from "../../hooks";
import { Icon_paint } from "../icons";

function ThemeButton() {
  const { handleSelect } = customHooks_.useTheme();

  return (
    <div>
      <Icon_paint
        onClick={handleSelect}
        className={`cursor-pointer mr-5 hover:scale-105 text=textWeather fill-currentWeather stroke-textWeather`}
      />
    </div>
  );
}

export default ThemeButton;
