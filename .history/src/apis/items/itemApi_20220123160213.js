import axiosClient from "apis/axiosClient";

const itemApi = {
  getAllItems: (params) => {
    const url = "items";
    return axiosClient.get(url, params);
  },
};

export default itemApi;
