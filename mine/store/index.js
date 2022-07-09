import { configureStore } from "@reduxjs/toolkit";

import plSliceReducer from "./slices/plSlice";

// redux store
let store = configureStore({ reducer: { plSliceReducer: plSliceReducer } });

export default store;
