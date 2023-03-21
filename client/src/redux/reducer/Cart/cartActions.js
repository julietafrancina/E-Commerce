import * as types from "../../actionsTypes/actionsTypes.js";
import axios from "axios";

export const getAllCarts = () => {
  return (dispatch) =>
    axios.get(`http://localhost:3000/cart`).then((response) => {
      dispatch({
        type: types.GET_ALL_CARTS,
        payload: response.data,
      });
    });
};

export const getCartById = (id) => {
  return (dispatch) =>
    axios
      .get(`http://localhost:3000/cart/${id}`)
      .then((response) => {
        dispatch({
          type: types.GET_CART_BY_ID,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};

export const createCart = () => {
  return (dispatch) =>
    axios
      .post(`http://localhost:3000/cart`)
      .then((response) => {
        dispatch({
          type: types.CREATE_CART,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};

export const deleteCart = (id) => {
  return (dispatch) =>
    axios
      .delete(`http://localhost:3000/cart/${id}`)
      .then((response) => {
        dispatch({
          type: types.DELETE_CART,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};

export const getCartByItem = (id) => {
  return (dispatch) =>
    axios
      .get(`http://localhost:3000/cartItems/${id}`)
      .then((response) => {
        dispatch({
          type: types.GET_CART_BY_ITEM,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};

export const updateCart = (id) => {
  return (dispatch) =>
    axios
      .put(`http://localhost:3000/cart/${id}`)
      .then((response) => {
        dispatch({
          type: types.UPDATE_CART,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};
