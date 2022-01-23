import axiosClient from "apis/baseApi";

const itemApi = {
	getAllItems: (params) => {
		const url = "items";
		return axiosClient.get(url, params);
	},
};

export default itemApi;
