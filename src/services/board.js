import { callApi } from "@/plugins/axios";

export const getBoards = () => {
  callApi({
    url: "/api/board",
    method: "GET",
  });
};

export const postBoard = (data) => {
  callApi({
    url: "/api/board",
    method: "POST",
    data,
  });
};

export const getBoard = (bno) => {
  callApi({
    url: `/api/board/${bno}`,
    method: "GET",
  });
};

export const deleteBoard = (bno) => {
  callApi({
    url: `/api/board/${bno}`,
    method: "DELETE",
  });
};

export const updateBoard = (data) => {
  callApi({
    url: `/api/board/${data}`,
    method: "PATCH",
    data,
  });
};
