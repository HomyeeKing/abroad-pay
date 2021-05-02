import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

// Add a request interceptor
instance.interceptors.request.use(config =>
  // Do something before request is sent
  config,
error =>
  // Do something with request error
  Promise.reject(error))

instance.interceptors.response.use(response =>
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  response.data,
(error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  Promise.reject(error)
})

export default instance
