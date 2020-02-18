import axios from "axios";

export const SET_LOGIN = "SET_LOGIN";

const heroku = process.env.REACT_APP_URL_EXPRESS;

export const isLogin = () => dispatch => {
    const token = localStorage.getItem("token");

    if (token) {
        dispatch(
            setLogin({
                isLogin: true
            })
        );
    } else {
        dispatch(setLogin());
    }
};

export const setLogin = data => {
    return {
        type: SET_LOGIN,
        payload: data
    };
};

export const login = (values, history) => dispatch => {
    return axios({
        method: "POST",
        // url: "https://blog-database-mashes.herokuapp.com/blogusers/login",
        url: `${heroku}blogusers/login`,
        data: values
    }).then(response => {
        if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
            dispatch(isLogin());
            history.push("/blogs");
        }
    });
};
