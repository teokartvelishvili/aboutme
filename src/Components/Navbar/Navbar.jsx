import "./Navbar.css";
import React from 'react';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../Hooks/ThemeContecs';
import LinkButton from '../LinkButton/LinkButton'; // მისამართი აქ უნდა შეცვალო

const Navbar = () => {
    const { theme } = useContext(ThemeContext);
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
                <li><LinkButton href="/" sectionId="#home" className="nav-link">Home</LinkButton></li>
                <li><LinkButton href="/Projects" sectionId="#projects" className="nav-link">My Projects</LinkButton></li>
                <li><LinkButton href="/About" sectionId="#about" className="nav-link">About Me</LinkButton></li>
                <li><LinkButton href="/Contact" sectionId="#contact" className="nav-link">Contact</LinkButton></li>
            </ul>
        </div>
    );
};

export default Navbar;