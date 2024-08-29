import axios from 'axios'

export const AxiosInterceptor = axios.create({
    baseURL: process.env.BASE_URL || "http://localhost:8006/api/",
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
  

