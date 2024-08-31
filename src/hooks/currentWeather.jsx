import { useDispatch, useSelector } from "react-redux";
import { weather_actions, weatherSelector } from "../features/weather/slice";
import { useMemo } from "react";

function useCurrentWeather() {
  const dispatch = useDispatch();
  const cities = useSelector(weatherSelector.cities);
  const selectedCity = useSelector(weatherSelector.selectedCity);
  const currentWeather = useSelector(weatherSelector.currentWeather);

  const handleCback = (arg) => {
    dispatch(weather_actions.selectCity(arg));
  };

  const selectedCountry = useMemo(() => {
    let current = {
      temperature: Math.round(currentWeather?.data?.current?.temp_c) || `-`,
      icon: currentWeather?.data?.current?.condition?.icon || "",
      condition: currentWeather?.data?.current?.condition?.text || "-",
      country: `${currentWeather?.data?.location?.country || "-"} , ${
        currentWeather?.data?.location?.region || "-"
      }`,
      date: currentWeather?.data?.current?.last_updated?.split(" ")[0] || "-",
      feelLike: Math.round(currentWeather?.data?.current?.feelslike_c) || "-",
    };

    return { current, hour: currentWeather?.data?.hour || [] };
  }, [currentWeather.data]);

  return {
    cities,
    selectedCity,
    handleCback,
    selectedCountry,
    loader: currentWeather.loader,
  };
}

export default useCurrentWeather;
