// select theme logic
const selectTheme = () => {
  const currentThemeId = localStorage.getItem("themeId");
  let fstId = "2";
  if (currentThemeId) {
    let id = Number(currentThemeId);
    if (id >= 5) {
      id = 1;
    } else {
      id += 1;
    }
    localStorage.setItem("themeId", id);
    return JSON.stringify(id);
  } else {
    localStorage.setItem("themeId", fstId);
    return fstId;
  }
};

const keynames = {
  themeSelection: "THEME_SELECTION",
};

export const dialogHelper = { selectTheme, keynames };
