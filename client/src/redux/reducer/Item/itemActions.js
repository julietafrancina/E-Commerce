import * as types from "../../actionsTypes/actionsTypes.js";
import axios from "axios";

export const getAllItems = () => {
  return (dispatch) =>
    axios.get(`http://localhost:3000/item`).then((response) => {
      dispatch({
        type: types.GET_ALL_ITEMS,
        payload: response.data,
      });
    });
};

export const getItemById = (id) => {
  return (dispatch) =>
    axios
      .get(`http://localhost:3000/item/${id}`)
      .then((response) => {
        dispatch({
          type: types.GET_ITEM_BY_ID,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};

export const createItem = (item) => {
  return (dispatch) =>
    axios
      .post(`http://localhost:3000/item`, item)
      .then((response) => {
        dispatch({
          type: types.CREATE_ITEM,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};

export const updateItem = (id, newItem) => {
  return (dispatch) =>
    axios
      .put(`http://localhost:3000/item/${id}`, newItem)
      .then((response) => {
        dispatch({
          type: types.UPDATE_ITEM,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};

export const deleteItem = (id) => {
  return (dispatch) =>
    axios
      .delete(`http://localhost:3000/item/${id}`)
      .then((response) => {
        dispatch({
          type: types.DELETE_ITEM,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};
