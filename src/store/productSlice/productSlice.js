import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data";

let productSliceData = createSlice({
  name: "productData",
  initialState: { productData: data },
  reducers: {},
});

export let productSliceAction = productSliceData.actions;
export default productSliceData.reducer;
