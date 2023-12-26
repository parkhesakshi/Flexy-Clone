import axios from "axios";

const APIURL = `http://localhost:4000/`;

export const getRequest = async (url, filters) => {
  return await axios.get(`${APIURL}${url}${setFilter(filters)}`);
};

export const postRequest = async (url, payload) => {
  return await axios.post(`${APIURL}${url}`, payload);
};

function setFilter(filters) {
  return !!filters ? `?${filters}` : "";
}
