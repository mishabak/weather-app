import propTypes from "prop-types";
import { Skelton_feelLike } from "../../skelton";
function FeelLIke({ selectedCountry = {}, loader = false }) {
  if (loader) return <Skelton_feelLike />;
  
  return (
    <div className="mt-[7.8px] text-[7.19px]">
      <span>Feels like {selectedCountry?.current?.feelLike}</span>
      &nbsp; | &nbsp; <span>Now 18:20</span>
    </div>
  );
}

FeelLIke.propTypes = {
  selectedCountry: propTypes.object,
  loader: propTypes.bool,
};

export default FeelLIke;
