import propTypes from "prop-types";
import { ThreeDots } from "react-loader-spinner";
function Loader({ height = "16", color = "#ffff" }) {
  return (
    <ThreeDots
      height={height}
      width="35"
      radius="9"
      color={color}
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}

Loader.propTypes = {
  height: propTypes.string,
  color: propTypes.string,
};

export default Loader;
