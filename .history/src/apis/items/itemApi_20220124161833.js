import axiosClient from "apis/axiosClient";

const itemApi = {
  getAllItems: (params) => {
    const url = "items";
    return axiosClient.get(url, params);
  },
  getItemById: (id, params) => {
    const url = `items/${id}`;
    return axiosClient.get(url, params);
  },
  getItemcatalogue: (category, params) => {
    const url = `items/${category}`;
    return axiosClient.get(url, params);
  },
  postItemAdmin: (params) => {
    const url = `items`;
    return axiosClient.post(url, params);
  },
};

export default itemApi;
