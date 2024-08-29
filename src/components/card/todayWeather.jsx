import { Fragment } from "react";
import WeatherTimeIndicator from "../common/weatherTimeIndicator";

function TodayWeather() {
  return (
    <div
      className="w-auto max-w-[250px] rounded-[16.78px] p-2 grid grid-cols-5 backdrop-blur-[13.9394px] today-radial"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, idx) => (
        <Fragment key={idx}>
          <WeatherTimeIndicator />
        </Fragment>
      ))}
    </div>
  );
}

export default TodayWeather;
