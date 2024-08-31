export default {
  selectCity: (state, { payload }) => {
    state.selectedCity = payload;
  },
  setNewTheme: (state, { payload }) => {
    state.theme = payload;
  },
};
