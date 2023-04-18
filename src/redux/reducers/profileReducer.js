import { GET_ALLPROFILES, GET_PROFILES } from "../actions";

const profileState = {
  content: {
    loading: false,
  },
  allProfiles: [],
};
export const profileReducer = (state = profileState, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        content: action.payload,
        loading: true,
      };
    case GET_ALLPROFILES:
      return {
        ...state,
        allProfiles: [action.payload],
      };

    default:
      return state;
  }
};
