import axios from "axios";
import queryString from "query-string";
import { baseURL } from "utils/constants";
import { getLocalStorage } from "utils/localStorage";

const getAccessToken = () => {
	const token = getLocalStorage("token");
	return token;
};

const axiosClient = axios.create({
	baseURL: baseURL,
	headers: {
		"Content-Type": "application/json",
	},
	paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		const accessToken = getAccessToken();
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axiosClient.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response.data;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

export default axiosClient;
