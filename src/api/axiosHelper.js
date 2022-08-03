import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com/'

const axiosHelper = axios.create({
    // timeout: 6000,
    baseURL: BASE_URL,
    headers: { 'content-type': 'application/json' },
})

axiosHelper.interceptors.response.use(function (response) {
    return Promise.resolve(response)
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosHelper