export default {
  theme: localStorage.getItem("themeId") || "1",
  dialog: {
    isOpen: false,
    title: "Confirm",
    desc: "Are you sure?",
    keyName: null,
    closeBtnTitle: "No",
    confirmBtnTitle: "Yes",
  },
};
