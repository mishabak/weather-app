import { weather_apis } from "./api";

export default function (builder) {
  builder
    .addCase(weather_apis.currentTemperature.pending, (state) => {
      state.currentWeather.loader = true;
    })
    .addCase(
      weather_apis.currentTemperature.fulfilled,
      (state, { payload }) => {
        state.currentWeather.loader = false;
        state.currentWeather.data = payload;
      }
    )
    .addCase(weather_apis.currentTemperature.rejected, (state) => {
      state.currentWeather.loader = false;
    })

    // ------  for search -------//
    .addCase(weather_apis.searchWeather.pending, (state) => {
      console.log("pending", "searchApi");
      state.searchWeather.loader = true;
    })
    .addCase(weather_apis.searchWeather.fulfilled, (state, { payload }) => {
      console.log("success", "searchApi");
      state.searchWeather.loader = false;
      state.searchWeather.data = payload;
    })
    .addCase(weather_apis.searchWeather.rejected, (state) => {
      console.log("failed", "searchApi");
      state.searchWeather.loader = false;
    });
}
