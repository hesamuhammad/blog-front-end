import axios from "axios";

export const SET_BLOGS = "SET_BLOGS";
export const GET_BLOGS = "GET_BLOGS";

export const setBlog = payload => {
    return {
        type: SET_BLOGS,
        payload
    };
};

export const getBlog = data => {
    return {
        type: GET_BLOGS,
        payload: data
    };
};

export const fetchBlogs = () => (dispatch, getState) => {
    const { users } = getState();

    if (users.isLogin === true) {
        const token = localStorage.getItem("token");

        return axios({
            method: "GET",
            url: "http://localhost:3030/blogusers/login",
            headers: { authorization: `Bearer ${token}` }
        }).then(response => [dispatch(setBlog(response.data.data))]);
    }
};

export const fetchDataBlogs = () => dispatch => {
    console.log("masuk");
    
    return axios.get("http://localhost:3030/blogs").then(res => {
        console.log(res, "res");
        
        dispatch(getBlog(res.data.data));
    });
};
