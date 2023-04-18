import { GET_ALLEXPERIENCES } from "../actions";

const InitialState = {
  content: {},
};

export const experiencesReducers = (state = InitialState, action) => {
  switch (action.type) {
    case GET_ALLEXPERIENCES:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
