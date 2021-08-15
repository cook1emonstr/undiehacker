import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Poetry from "../pages/Poetry";
import React from "react";

export const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/poetry' component={Poetry}/>
    </Switch>
);

export default Main;