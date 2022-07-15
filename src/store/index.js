import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "../store/productSlice/productSlice";

// redux store
let store = configureStore({
  reducer: { productSliceReducer: productSliceReducer },
});

export default store;
