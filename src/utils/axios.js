import axios from 'axios'
import { BACKEND_BASE_URL } from './config';
export const AxiosInterceptor = axios.create({
    baseURL: BACKEND_BASE_URL,
});
  
// Add a request interceptor
AxiosInterceptor.interceptors.request.use(
  config => {

    return config
  },
  error => {
    Promise.reject(error)
  }
)

// Add a response interceptor
AxiosInterceptor.interceptors.response.use(
    response => {
      return response
    },
    function (error) {
        // add response failed logic here -->
      return Promise.reject(error)
    }
)
  

