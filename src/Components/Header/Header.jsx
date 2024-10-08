
import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContecs";
import { Link } from "react-router-dom";
import "./Header.css";
import "../Toggle/toggle.css";
import Navbar from "../Navbar/Navbar";
import logoLight from "../../Assets/teoLogoLight.png";
import logoDark from "../../Assets/teoLogoDark.png";
import ToggleSwitch from "../Toggle/Toggle";
import lemon from '../../Assets/Property 1=orange, Property 2=on.png';
import sunShine from '../../Assets/sunShine.jpeg';
import toggleStars from '../../Assets/stars.jpeg'
import engFlag from '../../Assets/engFlag.png';
import geoFlag from '../../Assets/geoFlag.png';
import Star from "../Star/Star.jsx";


const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // Access ThemeContext
    const [isChecked, setIsChecked] = useState(theme === "dark");
    // const { language, setLanguage } = useContext(LanguageContext);

    const handleChange = () => {
        setIsChecked(!isChecked);
        toggleTheme(); // Toggle theme
    };
    // const handleLangClick = () => {
    //     const newLanguage = language === "ge" ? "en" : "ge";
    //     setLanguage(newLanguage);
    //   };



    return (
        <div className={`headerMainDiv ${theme}`}>
            
            
            { <div className={`LogoCont ${theme}`}>
            <Link to="/">
                <img
                alt="logo"
                src={theme === "dark" ? logoDark : logoLight}
                className="logo"
            />
            </Link>
            </div>
            }
<Star numberOfStars={52} />

<div className="ThemeToggle">
            {/* Pass all four images as props */}
            <ToggleSwitch 
                checked={isChecked} 
                onChange={handleChange} 
                image={sunShine} 
                image2={toggleStars}
            /></div>

        {/* <div className="LengToggle">
            <ToggleSwitch 
                checked={isChecked} 
                onChange={handleLangClick} 
                image={engFlag} 
                image2={geoFlag}
            />
        </div> */}

            <div className="navbar">
                <Navbar/>
            </div>
        </div>
    );
};

export default Header;
