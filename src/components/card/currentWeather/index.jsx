import { customHooks_ } from "../../../hooks";
import Dropdown from "../../common/dropdown";
import { motion } from "framer-motion";
import AboutCity from "./aboutCity";
import propTypes from "prop-types";
import FeelLIke from "./feelLike";
import NowTemp from "./nowTemp";
function CurrentWeather({
  handleCback = () => {},
  selectedCountry = {},
  selectedCity = {},
  loader = false,
  cities = [],
}) {
  const { variant_ } = customHooks_.useTransition();

  return (
    <motion.div
      variants={variant_.LR}
      className="
      bg-currentWeather text-textWeather 
      rounded-[16.78px] p-6 w-[250px] 
      text-center  font-poppins"
    >
      <Dropdown
        items={cities}
        label={"Today"}
        loader={loader}
        cback={handleCback}
        selected={selectedCity}
      />
      <NowTemp loader={loader} selectedCountry={selectedCountry} />
      <AboutCity loader={loader} selectedCountry={selectedCountry} />
      <FeelLIke loader={loader} selectedCountry={selectedCountry} />
    </motion.div>
  );
}

CurrentWeather.propTypes = {
  selectedCountry: propTypes.object,
  selectedCity: propTypes.object,
  handleCback: propTypes.func,
  cities: propTypes.array,
  loader: propTypes.bool,
};

export default CurrentWeather;
