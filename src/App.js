import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Blogs from "./components/Blogs";
import Logout from "./components/Logout";
import Mashes from "./pages/mashes";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Signin />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/blogs">
                    <Blogs />
                </Route>
                <Route path="/blogs">
                    <Blogs />
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
