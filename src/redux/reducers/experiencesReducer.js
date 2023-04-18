import { GET_ALLEXPERIENCES } from "../actions"

const InitialState = {
    content: []
}

export const experiencesReducers = (state = InitialState, action) => {
    switch (action.payload) {
        case GET_ALLEXPERIENCES:
            return {
                ...state,
                content: [action.payload],
            };
        default:
            return state;
    }
};