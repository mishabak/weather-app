import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInterceptor } from "../../utils/axios";

const currentTemperature = createAsyncThunk(
    "weather/currentTemperature",
    async (params, { rejectWithValue }) => {
        try {
            let res = await AxiosInterceptor.get("current-temperature")
            return res.data
       
      } catch (error) {
       throw rejectWithValue({success:false})
      }
    }
);
  
export const weather_apis = {
    currentTemperature
}