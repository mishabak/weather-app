import {
  CurrentWeatherCard,
  DescriptionCard,
  TodayWeatherCard,
} from "../../components";
import { motion } from "framer-motion";
import { customHooks_ } from "../../hooks";
import { useSelector } from "react-redux";
import { layoutSelector } from "../layout/slice";
function Weather() {
  const { scaleUp } = customHooks_.useTransition();
  const commomProps = customHooks_.useCurrentWeather();
  const theme = useSelector(layoutSelector.theme);
  return (
    <motion.div key={theme} variants={scaleUp} className="w-fit h-fit  mt-10 xs:mt-0">
      <section
        className=" 
          overflow-hidden
          xs:shadow-card-outer
          xs:bg-currentWeather
          xs:bg-card-img
          bg-no-repeat bg-position bg-cover flex flex-wrap
          px-[16px] py-9 xs:rounded-[16.78px] gap-4
          md:scale-125 lg:scale-150 duration-500
          w-full max-w-[549px] h-auto items-center justify-center top-0"
      >
        <CurrentWeatherCard {...commomProps} />
        <div className="flex flex-col">
          <TodayWeatherCard {...commomProps} />
          <DescriptionCard className="mt-4" />
        </div>
      </section>
    </motion.div>
  );
}

export default Weather;
