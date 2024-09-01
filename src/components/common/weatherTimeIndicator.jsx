import propTypes from "prop-types";
import { Skelton_timeIndic } from "../skelton";

function WeatherTimeIndicator({
  time = "",
  temp = "",
  img = "",
  loader = false,
}) {
  if (loader) return <Skelton_timeIndic />;

  return (
    <div className="text-white p-2 flex items-center flex-col justify-center text-[9.96px] leading-[15px]">
      <div>{time}</div>
      <div className="flex flex-nowrap">
        {img && <img className="w-[16px]" src={`https:${img}`} alt="" />}

        <span>
          {Math.round(temp)}
          <sup>°</sup>
        </span>
      </div>
    </div>
  );
}

WeatherTimeIndicator.propTypes = {
  time: propTypes.string,
  temp: propTypes.any,
  img: propTypes.string,
  loader: propTypes.bool,
};

export default WeatherTimeIndicator;
