import { getRequest } from "../base/base-htp";

export const getUsers = async () => {
  return await getRequest(`users`);
};

export const getUserChats = async (filters) => {
  return getRequest(`messages`, filters);
};
