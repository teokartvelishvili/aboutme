import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContecs";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`NavCont ${theme}`}>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className={`burger ${isOpen ? 'open' : ''}`}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <ul className={`UlCont ${isOpen ? "open" : ""}`}>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/Projects">My Projects</Link> </li>
                <li><Link to="/About">About Me</Link> </li>
                <li><Link to="/Contact">Contact</Link> </li>
            </ul>
        </div>
    );
};

export default Navbar;
