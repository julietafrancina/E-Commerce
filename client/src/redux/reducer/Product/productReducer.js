import * as types from "../../actionsTypes/actionsTypes.js";

const initialState = {
  products: [],
  currentProduct: {},
  responses: "",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case types.GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };

    case types.GET_PRODUCT_BY_ID:
      return {
        ...state,
        currentProduct: action.payload,
      };
    case types.CREATE_PRODUCT:
      return {
        ...state,
        responses: action.payload,
      };
    case types.DELETE_PRODUCT:
      return {
        ...state,
        responses: action.payload,
      };

    default:
      return state;
  }
};
