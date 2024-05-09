import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContecs";
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
        <div className={`NavCont ${theme}`}>
        <ul className={`UlCont ${theme}`}>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/Projects"> My Projects</Link> </li>
            <li><Link to="/About">About Me</Link> </li>
            <li><Link to="/Contact">Contact</Link> </li>
        </ul>
        </div>
        
    )
}
export default Navbar