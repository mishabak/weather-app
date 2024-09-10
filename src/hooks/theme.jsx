import { useDispatch } from "react-redux";
import { layout_actions } from "../features/layout/slice";
import { dialogHelper } from "../components/popups/dialog/helper";

function useTheme() {
  const dispatch = useDispatch();
  const handleSelect = () => {
    dispatch(
      layout_actions.handleDialogOpen({
        keyName: dialogHelper.keynames.themeSelection,
        title: "Theme Selection",
        desc: "Do you want to select new theme?",
      })
    );
  };

  return { handleSelect };
}

export default useTheme;
