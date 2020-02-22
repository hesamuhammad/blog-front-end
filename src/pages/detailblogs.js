import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBlogById } from "../actions";
import { withRouter } from "react-router-dom";
import moment from "moment";

function Detailblogs(props) {
    const {
        match: {
            params: { id }
        }
    } = props;

    const formatDate = moment(props.blogs.date).format(
        "MMMM Do YYYY, h:mm:ss a"
    );
    console.log(props);

    useEffect(() => {
        props.getBlogById(id);
    }, []);

    return (
        <div>
            <h1
                style={{
                    textAlign: "center",
                    fontWeight: "bold"
                }}
            >
                {props.blogs.title}
            </h1>
            <h5
                style={{
                    textAlign: "center",
                    marginBottom: "3%"
                }}
            >
                {props.blogs.subTitle}
            </h5>
            <p>{formatDate}</p>
            <img
                style={{
                    width: "100%",
                    marginBottom: "3%"
                }}
                // className="imageblog"
                src={`https://blog-database-mashes.herokuapp.com/${props.blogs.image}`}
                alt="blogs"
            />
            <p style={{ textAlign: "justify" }}>{props.blogs.body}</p>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        blogs: state.blogs
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBlogById: id => {
            dispatch(getBlogById);
        }
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Detailblogs)
);
