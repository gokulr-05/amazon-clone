import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// let reducerFunc = (state, action) => {
//   if (action.type === "INC") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === "DEC") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   return state;
// };

export let counterSlice = createSlice({
  name: "counterSlice",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment: (state, action) => {
      state.counter++;
    },
    decrement: (state, action) => {
      state.counter--;
    },
  },
});

// let store = createStore(reducerFunc, { counter: 0, showCounter: true });
let store = configureStore({
  reducer: counterSlice.reducer,
});

export let counterSliceAction = counterSlice.actions;

export default store;
