export default {
  setNewTheme: (state, { payload }) => {
    state.theme = payload;
  },
  handleDialogClose: (state) => {
    state.dialog.isOpen = false;
    state.dialog.keyName = "";
    state.dialog.desc = "Are you sure?";
    state.dialog.closeBtnTitle = "No";
    state.dialog.confirmBtnTitle = "Yes";
  },
  handleDialogOpen: (state, { payload }) => {
    state.dialog.isOpen = true;
    state.dialog.title = payload?.title || "Confirm";
    state.dialog.desc = payload?.desc || "Are you sure?";
    state.dialog.keyName = payload?.keyName || "";
    state.dialog.closeBtnTitle = payload?.closeBtnTitle || "No";
    state.dialog.confirmBtnTitle = payload?.confirmBtnTitle || "Yes";
  },
};
