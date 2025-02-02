import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Link as NavLink } from "react-router-dom";
import { Formik } from "formik";
import { login } from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="#3e3f45" href="https://instagram.com/mashes88">
                Mas Hes
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh"
    },
    image: {
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "dark"
                ? theme.palette.grey[900]
                : theme.palette.grey[50],
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    paper: {
        margin: theme.spacing(4, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5%",
        backgroundColor: "#fbefd2",
        borderRadius: "5%"
    },
    avatar: {
        margin: theme.spacing(5),
        backgroundColor: "#79597e"
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(2)
    },
    submit: {
        margin: theme.spacing(3, 0, 3),
        backgroundColor: "#5c967e"
    }
}));

function SignIn(props) {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <p>to comments on my blogs</p>
                    <Formik
                        initialValues={{
                            email: "hesahesa30@icloud.com",
                            password: "1234"
                        }}
                        onSubmit={(values, actions) => {
                            props.login(values, props.history);
                        }}
                    >
                        {props => (
                            <form
                                className={classes.form}
                                noValidate
                                onSubmit={props.handleSubmit}
                            >
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.email}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.password}
                                />
                                {/* <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="remember"
                                            color="primary"
                                        />
                                    }
                                    label="Remember me"
                                /> */}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disabled={props.isSubmitting}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item>
                                        <NavLink to="/Signup">
                                            {"Don't have an account? Sign Up"}
                                        </NavLink>
                                    </Grid>
                                </Grid>
                                <Box mt={8}>
                                    <Copyright />
                                </Box>
                            </form>
                        )}
                    </Formik>
                </div>
            </Grid>
        </Grid>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        login: (values, history) => {
            dispatch(login(values, history));
        }
    };
};

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
