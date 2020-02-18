import { GET_BLOGS } from "../actions";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOGS:
            return action.payload;
        default:
            return state;
    }
};
