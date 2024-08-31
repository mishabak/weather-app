import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInterceptor } from "../../utils/axios";

const currentTemperature = createAsyncThunk(
  "weather/currentTemperature",
  async (params, { rejectWithValue, getState }) => {
    try {
      const { weather } = getState();
      if (weather?.selectedCity) {
        let { data } = await AxiosInterceptor.get("weather", {
          params: weather?.selectedCity,
        });

        return data?.result || {};
      } else {
        throw rejectWithValue({
          success: false,
          message: "selected City not found",
        });
      }
    } catch (error) {
      throw rejectWithValue(error?.response?.data || error);
    }
  }
);

const searchWeather = createAsyncThunk(
  "weather/searchWeather",
  async (params, { rejectWithValue }) => {
    try {
      let res = await AxiosInterceptor.get("weather/search", {
        params,
      });
      return res.data?.result || [{}];
    } catch (error) {
      throw rejectWithValue(error?.response?.data || error);
    }
  }
);

export const weather_apis = {
  currentTemperature,
  searchWeather,
};
