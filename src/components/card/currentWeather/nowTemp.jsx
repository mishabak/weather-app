import propTypes from "prop-types";
import { Skelton_nowTemp } from "../../skelton";

function NowTemp({ selectedCountry = {}, loader = false }) {
  if (loader) return <Skelton_nowTemp />;

  return (
    <div className="mt-5">
      <div className="flex flex-nowrap justify-center items-center gap-[9.5px]">
        {selectedCountry?.current?.icon ? (
          <img
            className="w-14  drop-shadow-lg"
            src={`http:${selectedCountry?.current?.icon}`}
            alt=""
          />
        ) : (
          <div className="w-14  drop-shadow-lg text-center">-</div>
        )}

        <span className="text-[47.95px] leading-[58px]">
          {selectedCountry?.current?.temperature}
          <sup>°</sup>
        </span>
      </div>
    </div>
  );
}

NowTemp.propTypes = {
  selectedCountry: propTypes.object,
  loader: propTypes.bool,
};

export default NowTemp;
