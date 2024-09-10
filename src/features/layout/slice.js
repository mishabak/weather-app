import { createSelector, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from "./reducers";

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers,
});

const selector = (state) => state.layout;
const theme = createSelector([selector], ({ theme }) => theme);
const dialog = createSelector([selector], ({ dialog }) => dialog);

export const layout_actions = layoutSlice.actions;
export default layoutSlice.reducer;
export const layoutSelector = { theme, dialog };
