import {NavLink} from "react-router-dom";
import React from "react";

export const Navigation = () => (
    <nav>
        <ul>
            <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/poetry'>Poetry</NavLink></li>
        </ul>
    </nav>
);

export default Navigation;