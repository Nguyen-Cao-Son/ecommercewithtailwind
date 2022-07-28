import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com/'

const axiosHelper = axios.create({
    baseURL: BASE_URL,
    headers: { 'content-type': 'application/json' }
})

// http.interceptors.response.use(
// 	(response) => {
// 		const res = response.data

// 		return res
// 	},
// 	(error) => {
// 		return Promise.reject(error)
// 	}
// )

export default axiosHelper