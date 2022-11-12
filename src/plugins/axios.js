import axios from "axios";
import store from "@/store";

const instance = axios.create({
  baseURL: "https://api.devcury.kr",
});

export const callApi = async (config) => {
  try {
    const token = store.getters["user/token"];
    const baseHeaders = {};
    const headers = token
      ? { ...baseHeaders, Authorization: `Bearer ${token}` }
      : { ...baseHeaders };
    return await instance({
      headers: headers,
      ...config,
    });
  } catch (error) {
    if (error?.response?.data.error) {
      alert(error.response.data.error);
    }
    throw new Error(error);
  }
};
