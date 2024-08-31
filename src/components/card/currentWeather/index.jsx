import { customHooks_ } from "../../../hooks";
import Dropdown from "../../common/dropdown";
import AboutCity from "./aboutCity";
import FeelLIke from "./feelLike";
import NowTemp from "./nowTemp";
import { motion } from "framer-motion";
function CurrentWeather() {
  const { variant_ } = customHooks_.useTransition();
  const { cities, selectedCity, handleCback, selectedCountry, loader } =
    customHooks_.useCurrentWeather();

  return (
    <motion.div
      variants={variant_.LR}
      className=" bg-currentWeather text-textWeather rounded-[16.78px] p-6 w-[250px] text-center  font-poppins"
    >
      <Dropdown
        loader={loader}
        selected={selectedCity}
        items={cities}
        cback={handleCback}
      />
      <NowTemp loader={loader} selectedCountry={selectedCountry} />
      <AboutCity loader={loader} selectedCountry={selectedCountry} />
      <FeelLIke loader={loader} selectedCountry={selectedCountry} />
    </motion.div>
  );
}

export default CurrentWeather;
