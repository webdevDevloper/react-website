import axiosClient from "apis/axiosClient";

const cartApi = {
	getCart: (params) => {
		const url = "cart";
		return axiosClient.get(url, params);
	},
	updateCart: (params) => {
		const url = `cart/update`;
		return axiosClient.get(url, params);
	},
	getTotal: (params) => {
		const url = `cart/get-total`;
		return axiosClient.get(url, params);
	},
	addToCart: (data) => {
		const url = `cart/add`;
		return axiosClient.post(url, data);
	},
	purchase: (data) => {
		const url = `purchase`;
		return axiosClient.post(url, data);
	},
};

export default cartApi;
