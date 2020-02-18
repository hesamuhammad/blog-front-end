import React, { Component } from "react";
import Navbar from "./Navbar";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Button, Container } from "reactstrap";
// import { Button, Row,Col } from 'antd';
import { fetchDataBlogs } from "../actions";

class Blogs extends Component {
    componentDidMount = () => {
        this.props.fetchDataBlogs();
    };

    render() {
        const { data } = this.props;
        console.log(data, "data");

        return (
            <Container fluid={true}>
                <Navbar />
                <Row style={{ marginTop: "3em" }}>
                    {data.map(item => {
                        return (
                            <Col
                                xs={12}
                                md={{ size: 6, offset: 3 }}
                                key={item.id}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    paddingLeft: "5%",
                                    paddingRight: "5%",
                                    marginBottom: "5%"
                                }}
                            >
                                <Col>
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
                                    <p style={{ textAlign: "justify" }}>
                                        {item.body}
                                    </p>
                                    <Row style={{ display: "flex" }}>
                                        <Col>
                                            <Button type="dashed" size="large">
                                                <i className="fa fa-comment"></i>
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Link to={`/blogs/id/:${item.id}`}>
                                                <Button
                                                    type="danger"
                                                    size="large"
                                                >
                                                    Read More
                                                </Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.blogs
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDataBlogs: () => dispatch(fetchDataBlogs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
