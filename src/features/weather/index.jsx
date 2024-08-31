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
    <motion.section
      variants={scaleUp}
      className=" 
          xs:shadow-[0px_0px_3px_10px_#fae2bd]
          xs:bg-[url(./assets/icons/mobileBg.svg)]
          bg-no-repeat bg-position bg-cover flex flex-wrap
          px-[16px] py-9 xs:rounded-[16.78px] gap-4
          w-full max-w-[549px] h-auto items-center justify-center top-0 lg:scale-110 duration-500"
    >
      <CurrentWeatherCard />
      <div className="flex flex-col">
        <TodayWeatherCard />
        <DescriptionCard className="mt-4" />
      </div>
    </motion.section>
  );
}

export default Weather;
