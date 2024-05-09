
import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContecs";
import "./Header.css";
import "../Toggle/toggle.css";
import Navbar from "../Navbar/Navbar";
import logoLight from "../../Assets/teoLogoLight.png";
import logoDark from "../../Assets/teoLogoDark.png";
import ToggleSwitch from "../Toggle/Toggle";
import lemon from '../../Assets/Property 1=orange, Property 2=on.png';
import orange from '../../Assets/Property 1=orange, Property 2=off.png';


const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // Access ThemeContext
    const [isChecked, setIsChecked] = useState(theme === "dark");

    const handleChange = () => {
        setIsChecked(!isChecked);
        toggleTheme(); // Toggle theme
    };

    return (
        <div className={`headerMainDiv ${theme}`}>

            { <div className={`LogoCont ${theme}`}>
            <img
            alt="logo"
            src={theme === "dark" ? logoDark : logoLight}
            className="logo"
          />
            </div>
   }

<div className="ThemeToggle">
            {/* Pass all four images as props */}
            <ToggleSwitch 
                checked={isChecked} 
                onChange={handleChange} 
                image={lemon} 
                image2={orange}
          
            />
        </div>
            <div className="navbar">
                <Navbar/>
            </div>
        </div>
    );
};

export default Header;
