import { callApi } from "@/plugins/axios";

export const getAllCustom = () => {
    return callApi(`/api/custom/keys`, {
      method: "GET",
    });
  };

export const getCustom = (key) => {
  return callApi(`/api/custom/${key}`, {
    method: "GET",
  });
};

export const postCustom = (key, data) => {
  return callApi(`/api/custom/${key}`, {
    method: "POST",
    data,
  });
};
