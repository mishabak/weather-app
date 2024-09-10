import { configureStore } from "@reduxjs/toolkit";
import weather from "../features/weather/slice";
import layout from "../features/layout/slice";
export const store = configureStore({
  reducer: {
    weather,
    layout,
  },
});
