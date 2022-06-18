import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

// centralized store to manage app wide state
let store = configureStore({
  reducer: {
    counterSliceReducer: counterReducer,
    authSliceReducer: authReducer,
  },
});

export default store;
