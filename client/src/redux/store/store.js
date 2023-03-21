import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productReducer } from "../reducer/Product/productReducer";
import { itemReducer } from "../reducer/Item/itemReducer";
import { cartReducer } from "../reducer/Cart/cartReducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    productReducer,
    itemReducer,
    cartReducer,
  },
  middleware: [...getDefaultMiddleware({ serializableCheck: false }), thunk],
});

export default store;
