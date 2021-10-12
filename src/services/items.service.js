import axios from "axios";
import { API_URL } from "../consts";

const getItems = () => {
  return axios.get(API_URL + "items");
};

const addItem = (item) => {
  return axios.post(API_URL + "items", item);
};

const deleteItem = (data) => {
  return axios.delete(API_URL + "items", data);
};

export default {
  getItems,
  addItem,
  deleteItem,
};
