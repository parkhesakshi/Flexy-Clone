import { getRequest } from "../base/base-htp";

export const getUsers = async (filters) => {
  return getRequest(`users`, filters).then((res) => res.data);
};

export const getUserChats = async (filters) => {
  return getRequest(`messages`, filters).then((res) => res.data);
};
