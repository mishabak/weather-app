import { Fragment } from "react";
import WeatherTimeIndicator from "../common/weatherTimeIndicator";
import { customHooks_ } from "../../hooks";
import { motion } from "framer-motion";
import propTypes from "prop-types";

function TodayWeather({ selectedCountry = [], loader = false }) {
  const { variant_ } = customHooks_.useTransition();

  return (
    <motion.div
      variants={variant_.LR}
      className="w-auto max-w-[250px] min-h-9 rounded-[16.78px] p-2 grid grid-cols-5 backdrop-blur-[13.9394px] today-radial"
    >
      {loader
        ? [...Array(10)].map((data, key) => (
            <WeatherTimeIndicator key={key} loader={true} />
          ))
        : selectedCountry.hour?.slice(0, 10)?.map((data, idx) => (
            <Fragment key={idx}>
              <WeatherTimeIndicator
                img={data?.condition?.icon}
                temp={data?.temp_c || ""}
                time={idx == 0 ? "Now" : data?.time?.split(" ")[1]}
              />
            </Fragment>
          ))}
    </motion.div>
  );
}

TodayWeather.propTypes = {
  selectedCountry: propTypes.array,
  loader: propTypes.bool,
};

export default TodayWeather;
