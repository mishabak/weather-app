import { useDispatch, useSelector } from "react-redux";
import { layout_actions, layoutSelector } from "../../../features/layout/slice";
import { dialogHelper } from "./helper";

const useDialog = () => {
  const dialog = useSelector(layoutSelector.dialog);
  const theme = useSelector(layoutSelector.theme);
  const dispatch = useDispatch();

  // function for close dialog box -->>
  const handleClose = () => {
    dispatch(layout_actions.handleDialogClose());
  };

  // function for handle submit button -->>
  const handleCallback = () => {
    switch (dialog.keyName) {
      case dialogHelper.keynames.themeSelection:
        dispatch(layout_actions.setNewTheme(dialogHelper.selectTheme()));
        break;
      default:
        console.log("valid key not found in dialog callback");
        break;
    }
    handleClose();
  };

  return { dialog, theme, handleClose, handleCallback };
};

export default useDialog;
