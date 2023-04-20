import { GET_ALLEXPERIENCES } from "../actions";
import { ADD_SINGLE_EXP } from "../actions/form";

const InitialState = {
  content: [],
  loadingExperience: true,
  singleExp: [],
  loadingSingleExp: true,
};

export const experiencesReducers = (state = InitialState, action) => {
  switch (action.type) {
    case GET_ALLEXPERIENCES:
      return {
        ...state,
        content: action.payload,
        loadingExperience: false,
      };
    case ADD_SINGLE_EXP:
      return {
        ...state,
        singleExp: action.payload,
        loadingSingleExp: false,
      };

    default:
      return state;
  }
};
