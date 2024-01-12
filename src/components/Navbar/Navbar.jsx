import React, {Component} from 'react';
import cs_style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends.jsx";

function Navbar(props) {
    return <nav className={cs_style.nav}>
        <div>
            <NavLink to="/" className={NavData=>NavData.isActive ? cs_style.active:cs_style.items}>Home</NavLink>
        </div>
        <div>
            <NavLink to="/Profile" className={NavData=>NavData.isActive ? cs_style.active:cs_style.items}>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/Dialogs" className={NavData=>NavData.isActive ? cs_style.active:cs_style.items}>Dialogs</NavLink>
        </div>
        <div>
            <NavLink to="/News" className={NavData=>NavData.isActive ? cs_style.active:cs_style.items}>News</NavLink>
        </div>
        <div>
            <NavLink to="/Music" className={NavData=>NavData.isActive ? cs_style.active:cs_style.items}>Music</NavLink>
        </div>
        <div>
            <NavLink to="/Settings" className={NavData=>NavData.isActive ? cs_style.active:cs_style.items}>Settings</NavLink>
        </div>
        <div>
            {/*<NavLink to="/Friends" className={NavData=>NavData.isActive ? cs_style.active:cs_style.items}>Friends</NavLink>*/}
        </div>
        <Friends ffriends={props.ffriends} />
    </nav>

}

export default Navbar;
