import { useDispatch, useSelector } from "react-redux";
import { weather_apis } from "../features/weather/api";
import { weatherSelector } from "../features/weather/slice";
import { useEffect, useMemo } from "react";

function UseList() {
  const dispatch = useDispatch();
  const cities = useSelector(weatherSelector.cities);
  const handleSearch = (data) => {
    let country = data.country.value;
    let params = { ...data, country };
    dispatch(weather_apis.searchWeather(params));
  };

  useEffect(() => {
    dispatch(weather_apis.searchWeather());
  }, []);

  const options = useMemo(() => {
    return cities.map((city) => ({ label: city.name, value: city.country }));
  }, [cities]);

  const searchWeather = useSelector(weatherSelector.searchWeather);
  const tableData = useMemo(() => searchWeather.data, [searchWeather.data]);

  return { handleSearch, tableData, loader: searchWeather.loader, options };
}

export default UseList;
