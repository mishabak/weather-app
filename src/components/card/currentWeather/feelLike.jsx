import propTypes from "prop-types";
import { Skelton_feelLike } from "../../skelton";
function FeelLIke({ selectedCountry = {}, loader = false }) {
    if (loader) return <Skelton_feelLike />;
  return (
    <div className="mt-[7.8px] text-[7.19px] flex flex-nowrap justify-center">
      <span>Feels like {selectedCountry?.current?.feelLike}</span>
      &nbsp; | &nbsp;
      <span className="flex flex-nowrap">
        Sunset &nbsp;
        {selectedCountry?.sunset}
        {/* <LiveClock /> */}
      </span>
    </div>
  );
}

FeelLIke.propTypes = {
  selectedCountry: propTypes.object,
  loader: propTypes.bool,
};

export default FeelLIke;
