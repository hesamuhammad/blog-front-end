import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchDataBlogs } from "../actions/blogs";
import { Row, Col, Button, Container } from "reactstrap";
export default class detailblogs extends Component {
    componentDidMount() {
        this.props.getData(this.props.match.params.id);
    }
    render() {
        const { item } = this.props;
        // const heroku = process.env.REACT_APP_URL_EXPRESS;
        // const body = item.body;
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Card style={{ padding: "5%" }}>
                            <h1
                                style={{
                                    textAlign: "center",
                                    fontWeight: "bold"
                                }}
                            >
                                {item.title}
                            </h1>
                            <h5
                                style={{
                                    textAlign: "center",
                                    marginBottom: "3%"
                                }}
                            >
                                {item.subTitle}
                            </h5>
                            <p>{item.date}</p>
                            <img
                                style={{
                                    width: "100%",
                                    marginBottom: "3%"
                                }}
                                // className="imageblog"
                                src={`https://blog-database-mashes.herokuapp.com/${item.image}`}
                                alt="blogs"
                            />
                            <p style={{ textAlign: "justify" }}>{item.body}</p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.blogs.editBlog
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getData: id => dispatch(fetchDataBlogs(id))
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(detailblogs)
);
