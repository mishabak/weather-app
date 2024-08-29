import { weather_apis } from "./api";

export default function (builder) {
  builder
      .addCase(weather_apis.currentTemperature.pending, (state) => {
        
      // api pending
    })
    .addCase(
      weather_apis.currentTemperature.fulfilled,
      (state, { payload }) => {
        // api success
      }
    )
    .addCase(weather_apis.currentTemperature.rejected, (state, { payload }) => {
      // if api failed
    });
}
