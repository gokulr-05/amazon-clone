import { createSlice } from "@reduxjs/toolkit";

// slice to maintain authentication data
let authSlice = createSlice({
  name: "authenticationSlice",
  initialState: { isAuthenticated: false },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export let authSliceAction = authSlice.actions;
export default authSlice.reducer;
