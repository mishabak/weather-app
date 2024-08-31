import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weather_apis } from "../features/weather/api";
import { weatherSelector } from "../features/weather/slice";

const useHomePage = () => {
  const dispatch = useDispatch();
  const selectedCity = useSelector(weatherSelector.selectedCity);
  useEffect(() => {
    dispatch(weather_apis.currentTemperature());
  }, [selectedCity]);

  return {};
};

export default useHomePage;
