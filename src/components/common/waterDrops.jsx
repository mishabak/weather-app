import propTypes from "prop-types";
import { Icon_rain } from "../icons";

function WaterDrops({
  incType = 1,
  duration = [],
  delay = "0s",
  waterDrop = 10,
}) {
  return [...Array(waterDrop)].map((d, idx) => (
    <Icon_rain
      key={idx}
      style={{
        left: `${(idx + 1) * 5}%`,
        animationDuration: `${duration[idx]}s`,
        animationDelay: delay,
      }}
      type={(idx + incType) % 3}
      className={` 
          rain w-6 h-6 absolute 
          top-[55%] z-[1]`}
    />
  ));
}

WaterDrops.propTypes = {
  incType: propTypes.number,
  duration: propTypes.array,
};
export default WaterDrops;
