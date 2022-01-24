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
  getItemcatalogue: (id, params) => {
    const url = `items/${id}`;
    return axiosClient.get(url, params);
  },
};

export default itemApi;
