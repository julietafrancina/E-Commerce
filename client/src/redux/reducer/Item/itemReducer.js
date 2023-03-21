import * as types from "../../actionsTypes/actionsTypes.js";

const initialState = {
  newItem: {},
  totalItems: [],
  currentItems: [],
  responses: "",
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_ITEMS:
      return {
        ...state,
        totalItems: action.payload,
      };

    case types.GET_ITEM_BY_ID:
      return {
        ...state,
        item: action.payload,
      };

    case types.CREATE_ITEM:
      return {
        ...state,
        currentItems: action.payload,
      };

    case types.UPDATE_ITEM:
      return {
        responses: action.payload,
      };

    case types.DELETE_ITEM:
      return {
        responses: action.payload,
      };

    // case types.ADD_PRODUCT_CART:
    //   if (action.payload.length > 0) {
    //     return {
    //       ...state,
    //       productsCart: action.payload,
    //     };
    //   } else {
    //     let { id, count } = action.payload;
    //     const exist = state.productsCart.some((p) => p.id === id);
    //     if (exist) {
    //       let newProductCart = state.productsCart.map((p) => {
    //         if (p.id === id) {
    //           return {
    //             id: p.id,
    //             count: p.count + count,
    //             image: p.image,
    //             name: p.name,
    //             price: p.price,
    //             priceTotal: p.price * (p.count + count),
    //           };
    //         } else {
    //           return p;
    //         }
    //       });
    //       return {
    //         ...state,
    //         productsCart: newProductCart,
    //       };
    //     } else {
    //       return {
    //         ...state,
    //         productsCart: [...state.productsCart, action.payload],
    //       };
    //     }
    //   }

    default:
      return state;
  }
};
