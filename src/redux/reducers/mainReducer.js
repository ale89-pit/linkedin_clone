import { combineReducers } from "@reduxjs/toolkit";
import { homeReducer } from "./homeReducer";
import { profileReducer } from "./profileReducer";

const mainReducer = combineReducers({
  home: homeReducer,
  profile: profileReducer,
});

export default mainReducer;
