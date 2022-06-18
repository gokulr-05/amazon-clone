import { configureStore, createSlice } from "@reduxjs/toolkit";

// slice to maintain counter data
let counterSlice = createSlice({
  name: "counterSlice",
  initialState: { counter: 0, isCounterVisible: true },
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + 1;
    },
    decrement: (state, action) => {
      state.counter = state.counter - 1;
    },

    showCounter: (state, action) => {
      state.isCounterVisible = true;
    },

    hideCounter: (state, action) => {
      state.isCounterVisible = false;
    },

    increase: (state, action) => {
      state.counter = state.counter + action.payload.value;
    },
    toggleCounter: (state, action) => {
      state.isCounterVisible = !state.isCounterVisible;
    },
  },
});

export let counterSliceAction = counterSlice.actions;

// centralized store to manage app wide state
let store = configureStore({
  reducer: { counterSliceReducer: counterSlice.reducer },
});

export default store;
