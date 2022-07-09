import { createSlice } from "@reduxjs/toolkit";
// import data from "../../data/data.json";
import data from "../../data/data1";
import { fixturesTeamsArr } from "../../data/data1";

let plSlice = createSlice({
  name: "plData",
  initialState: { plData: data, teamDataArr: fixturesTeamsArr },
  reducers: {},
});

export let plSliceAction = plSlice.actions;
export default plSlice.reducer;
