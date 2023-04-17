import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/mainReducer.js";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
