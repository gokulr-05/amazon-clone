import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data";

let productSliceData = createSlice({
  name: "productData",
  initialState: { productData: data, basket: [] },
  reducers: {
    AddToBasket: (state, action) => {
      state.basket.push(action.payload.item);
    },

    RemoveFromBasket: (state, action) => {
      state.basket.splice(action.payload.ind, 1);
    },
  },
});

export let productSliceAction = productSliceData.actions;
export default productSliceData.reducer;
