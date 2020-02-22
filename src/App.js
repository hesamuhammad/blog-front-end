import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Blogs from "./components/Blogs";
import Detailblogs from "./pages/detailblogs";
import Logout from "./components/Logout";
import Mashes from "./pages/mashes";
import Addblog from "./pages/addblog";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Blogs />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/blogs">
                    <Blogs />
                </Route>
                <Route path="/blogs/:id">
                    <Detailblogs />
                </Route>
                <Route path="/addblog">
                    <Addblog />
                </Route>
                <Route path="/signin">
                    <Signin />
                </Route>
                <Route path="/logout">
                    <Logout />
                </Route>
                <Route path="/mashes">
                    <Mashes />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
