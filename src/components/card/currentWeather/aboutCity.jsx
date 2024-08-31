import propTypes from "prop-types";
import { Skelton_aboutCty } from "../../skelton";
function AboutCity({ selectedCountry = {}, loader = false }) {
  if (loader) return <Skelton_aboutCty />;

  return (
    <div className="text-[7.19px]">
      <p className="text-[9.59px] font-medium">
        {selectedCountry?.current?.condition}
      </p>
      <p className="mt-[7.8px]">{selectedCountry?.current?.country}</p>
      <p className="mt-[7.8px]">{selectedCountry?.current?.date}</p>
    </div>
  );
}

AboutCity.propTypes = {
  selectedCountry: propTypes.object,
  loader: propTypes.bool,
};

export default AboutCity;
