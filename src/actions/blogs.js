import axios from "axios";

export const GET_BLOGS = "GET_BLOGS";
export const SET_BLOG_BY_ID = "SET_BLOG_BY_ID";

const heroku = process.env.REACT_APP_URL_EXPRESS;

export const getBlog = data => {
    return {
        type: GET_BLOGS,
        payload: data
    };
};

export const setBlogById = data => {
    return {
        type: SET_BLOG_BY_ID,
        payload: data
    };
};

export const getBlogById = id => dispatch => {
    return axios
        .get(`${heroku}blogs/${id}`)
        .then(result => {
            dispatch(setBlogById(result.data));
        })
        .catch(error => {
            console.log(error);
        });
};
export const fetchBlogs = () => (dispatch, getState) => {
    const { users } = getState();

    if (users.isLogin === true) {
        const token = localStorage.getItem("token");

        return axios({
            method: "GET",
            // url: "https://blog-database-mashes.herokuapp.com/login",
            url: `${heroku}login`,
            headers: { authorization: `Bearer ${token}` }
        }).then(response => [dispatch(getBlog(response.data.data))]);
    }
};

export const fetchDataBlogs = () => dispatch => {
    console.log("masuk");

    return axios.get(`${heroku}blogs`).then(res => {
        console.log(res, "res");

        dispatch(getBlog(res.data.data));
    });
};
