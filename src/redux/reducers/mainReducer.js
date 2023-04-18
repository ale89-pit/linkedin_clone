import { combineReducers } from "@reduxjs/toolkit";
import { homeReducer } from "./homeReducer";
import { profileReducer } from "./profileReducer";
import { experiencesReducers } from "./experiencesReducer";


const mainReducer = combineReducers({
  home: homeReducer,
  profile: profileReducer,
  experience: experiencesReducers,
});

export default mainReducer;
