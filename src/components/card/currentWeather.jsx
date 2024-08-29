import { CustomIcons_ } from "../../assets/icons/icon";
import Dropdown from "../common/dropdown";

function CurrentWeather() {
  return (
    <div className=" bg-currentWeather text-currentWeather rounded-[16.78px] p-6 w-[250px] text-center  font-poppins">
      <Dropdown />
      <div className="mt-5">
        <div className="flex flex-nowrap justify-center items-center gap-[9.5px]">
          <CustomIcons_.Sun className="w-9" />
          <span className="text-[47.95px] leading-[58px]">
            32<sup>°</sup>
          </span>
        </div>
      </div>
      <div className="text-[7.19px]">
        <p className="text-[9.59px] font-medium">Sunny</p>
        <p className="mt-[7.8px]">California, Los Angeles</p>
        <p className="mt-[7.8px]">21 Oct 2019</p>
      </div>
      <div className="mt-[7.8px] text-[7.19px]">
        <span>Feels like 30</span> &nbsp;|&nbsp; <span>Sunset 18:20</span>
      </div>
    </div>
  );
}

export default CurrentWeather;
