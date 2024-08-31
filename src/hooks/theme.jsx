import { useDispatch } from "react-redux";
import { weather_actions } from "../features/weather/slice";

function useTheme() {
  const dispatch = useDispatch();
  const handleSelect = () => {
    const isConfirm = window.confirm("Do you want to switch to the new theme?");
    if (isConfirm) {
      const currentThemeId = localStorage.getItem("themeId");
      if (currentThemeId) {
        let id = Number(currentThemeId);

        if (id >= 5) {
          id = 1;
        } else {
          id += 1;
        }
        localStorage.setItem("themeId", id);
        dispatch(weather_actions.setNewTheme(id));
      } else {
        dispatch(weather_actions.setNewTheme(2));
        localStorage.setItem("themeId", 2);
      }
    }
  };

  return { handleSelect };
}

export default useTheme;
