import { createSelector, createSlice } from "@reduxjs/toolkit";
import extraReducers from "./extraReducers";
import initialState from "./initialState";
import reducers from "./reducers";

const weatherSlice = createSlice({
  initialState,
  name: "weather",
  extraReducers,
  reducers,
});

const selector = (state) => state.weather;
const cities = createSelector([selector], (state) => state.cities);
const selectedCity = createSelector([selector], (state) => state.selectedCity);
const theme = createSelector([selector], (state) => state.theme);
const searchWeather = createSelector(
  [selector],
  (state) => state.searchWeather
);
const currentWeather = createSelector(
  [selector],
  (state) => state.currentWeather
);

export const weather_actions = weatherSlice.actions;
export default weatherSlice.reducer;
export const weatherSelector = {
  cities,
  selectedCity,
  currentWeather,
  searchWeather,
  theme,
};
