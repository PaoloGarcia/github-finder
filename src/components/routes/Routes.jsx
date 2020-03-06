import React from "react";

// router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Navbar from "../layout/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import User from "../users/User";

function Routes() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/users/:login" component={User} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Routes;