import axios, { AxiosError } from 'axios';
import { getAuthToken } from '@/helpers/authHelper';

const getBearerToken = (token: any) => `Bearer ${getAuthToken()}`;

const instance = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}`,
	timeout: 10000,
	headers: {
        'Authorization': getBearerToken(),
        'Content-Type': 'application/json'
    },
});

instance.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response.data
	},
	function (error: AxiosError) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		// 401, 403, 500
		return Promise.reject(error.response?.data) // should be error response body
	}
)


export default class Request {
	static get(endpoint, params) {
		return instance.get(endpoint, {params});
	}

	static post(endpoint, data = {}) {
		return instance.post(endpoint, {...data});
	}
	static put(endpoint, data = {}) {
		return instance.put(endpoint, {...data});
	}
}
