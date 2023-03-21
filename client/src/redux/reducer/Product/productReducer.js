import * as types from "../../actionsTypes/actionsTypes.js";

const initialState = {
  products: [],
  currentProduct: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsList: action.payload,
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
