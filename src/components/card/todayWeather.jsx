import { Fragment } from "react";
import WeatherTimeIndicator from "../common/weatherTimeIndicator";
import { customHooks_ } from "../../hooks";
import { motion } from "framer-motion";

function TodayWeather() {
  const { selectedCountry, loader } = customHooks_.useCurrentWeather();
  const { variant_ } = customHooks_.useTransition();

  return (
    <motion.div
      variants={variant_.LR}
      className="w-auto max-w-[250px] min-h-9 rounded-[16.78px] p-2 grid grid-cols-5 backdrop-blur-[13.9394px] today-radial"
    >
      {selectedCountry.hour?.slice(0, 10)?.map((data, idx) => (
        <Fragment key={idx}>
          <WeatherTimeIndicator
            loader={loader}
            img={data?.condition?.icon}
            temp={data?.temp_c || ""}
            time={idx == 0 ? "Now" : data?.time?.split(" ")[1]}
          />
        </Fragment>
      ))}
    </motion.div>
  );
}

export default TodayWeather;
