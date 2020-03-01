import React from 'react';
import { NavLink } from "react-router-dom";
import {FaHome} from "react-icons/fa";

export const MainMenu = () =>
    <nav >
        <NavLink to="/">
            {/* [Home] */}
            <FaHome />
        </NavLink> 
        <NavLink to="Knowledge">
            [Knowledge]
        </NavLink>
        <NavLink to="Work">
            [Work]
        </NavLink>
        <NavLink to="/about">
            [About]
        </NavLink>
    </nav>
