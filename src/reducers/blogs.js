import { GET_BLOGS, SET_BLOG_BY_ID } from "../actions";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOGS:
            return action.payload;
        case SET_BLOG_BY_ID:
            return action.payload;
        default:
            return state;
    }
};
