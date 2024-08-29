import { createSlice } from "@reduxjs/toolkit";
import extraReducers from "./extraReducers";
import initialState from "./initialState";
import reducers from "./reducers";

const weatherSlice = createSlice({
  initialState,
  name: "weather",
  reducers,
  extraReducers,
});

export default weatherSlice.reducer;
export const weather_actions = weatherSlice.actions;
