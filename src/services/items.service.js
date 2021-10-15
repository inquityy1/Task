import axios from "axios";
import { API_URL } from "../consts";

const getItems = () => {
  return axios.get(API_URL + "items");
};

const addItem = (item) => {
  return axios.post(API_URL + "items", item);
};

const deleteItem = (id) => {
  return axios.delete(API_URL + "items/" + id);
};

const updateItem = (id) => {
  return axios.delete(API_URL + id);
};

const postItem = (item) => {
  return axios.post(API_URL + "items", item);
};

export default {
  getItems,
  addItem,
  deleteItem,
  updateItem,
  postItem,
};
