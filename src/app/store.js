import { configureStore } from "@reduxjs/toolkit";
import weather from "../features/weather/slice";
export const store = configureStore({
  reducer: {
    weather,
  },
});
