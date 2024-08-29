import {
  CurrentWeatherCard,
  DescriptionCard,
  TodayWeatherCard,
} from "../../components";
function Weather() {
  return (
    <section
      className=" 
          xs:bg-[url(./assets/icons/mobileBg.svg)]
          bg-no-repeat bg-bottom bg-cover flex flex-wrap
          px-[16px] py-7 xs:rounded-[16.78px] gap-4
          w-full max-w-[549px] h-auto items-center justify-center top-0 lg:scale-110 duration-500"
    >
      <CurrentWeatherCard />
      <div className="flex flex-col">
        <TodayWeatherCard />
        <DescriptionCard className="mt-4" />
      </div>
    </section>
  );
}

export default Weather;
