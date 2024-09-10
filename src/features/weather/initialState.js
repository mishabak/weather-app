import { cities } from "../../../temp.json";
export default {
  currentWeather: {
    loader: false,
    data: {},
  },
  cities,
  selectedCity: cities[0],
  searchWeather: {
    data: [],
    loader: false,
  }
};
