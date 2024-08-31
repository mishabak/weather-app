import {
  CurrentWeatherCard,
  DescriptionCard,
  TodayWeatherCard,
} from "../../components";
import { motion } from "framer-motion";
import { customHooks_ } from "../../hooks";
function Weather() {
  const { scaleUp } = customHooks_.useTransition();
  return (
    <div className="w-fit h-fit md:scale-125 lg:scale-150">
      <motion.section
        variants={scaleUp}
        className=" 
      overflow-hidden
          xs:shadow-card-outer
          xs:bg-card-img
          bg-no-repeat bg-position bg-cover flex flex-wrap
          px-[16px] py-9 xs:rounded-[16.78px] gap-4
          w-full max-w-[549px] h-auto items-center justify-center top-0 duration-500"
      >
        <CurrentWeatherCard />
        <div className="flex flex-col">
          <TodayWeatherCard />
          <DescriptionCard className="mt-4" />
        </div>
      </motion.section>
    </div>
  );
}

export default Weather;
