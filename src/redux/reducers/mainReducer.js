import { combineReducers } from "@reduxjs/toolkit";
import { homeReducer } from "./homeReducer";
import { profileReducer } from "./profileReducer";
import { loginReducer } from "./loginReducer";

const mainReducer = combineReducers({
  home: homeReducer,
  profile: profileReducer,
  login: loginReducer,
});

export default mainReducer;
