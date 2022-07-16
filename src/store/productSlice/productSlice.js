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

    searchProducts: (state, action) => {
      let searchText = action.payload.searchText.trim();
      console.log("searchText=", searchText);
      if (searchText !== "") {
        let filteredProducts = state.productData.filter((val, index, arr) => {
          return val.title.toLowerCase().includes(searchText.toLowerCase());
        });
        console.log("filteredProducts=", filteredProducts);
        state.productData = filteredProducts;
      } else {
        state.productData = data;
      }
    },
  },
});

export let productSliceAction = productSliceData.actions;
export default productSliceData.reducer;
