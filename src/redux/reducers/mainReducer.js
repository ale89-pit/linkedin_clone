import { combineReducers } from "@reduxjs/toolkit";
import { homeReducer } from "./homeReducer";
import { profileReducer } from "./profileReducer";
import { experiencesReducers } from "./experiencesReducer";

import { loginReducer } from "./loginReducer";

const mainReducer = combineReducers({
  home: homeReducer,
  profile: profileReducer,
  experience: experiencesReducers,
  login: loginReducer,
});

export default mainReducer;
