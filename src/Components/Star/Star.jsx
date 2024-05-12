import React, { useState, useContext, useEffect, useRef } from "react";
import "./Star.css";
import { ThemeContext } from "../../Hooks/ThemeContecs";
import star from '../../Assets/f1vc5obqj6h2euce4sdaaeupck-26688eb9b1cb1216298197a66d86efe3.png';
import fallingStarImg from '../../Assets/fallingStar.png';

const Star = ({ numberOfStars }) => {
    const { theme } = useContext(ThemeContext); // Access ThemeContext
    const [isChecked, setIsChecked] = useState(theme === "dark");
    const fallingStarRef = useRef(null);

    useEffect(() => {
        if (theme === "dark") {
            const fallingStarElement = fallingStarRef.current;

            const restartAnimation = () => {
                fallingStarElement.classList.remove('fallingStarAnimation');
                void fallingStarElement.offsetWidth; // Trigger reflow to restart animation
                fallingStarElement.classList.add('fallingStarAnimation');
            };

            restartAnimation(); // Start the animation cycle initially

            const intervalId = setInterval(restartAnimation, 5000); // Restart animation every 5 seconds

            return () => clearInterval(intervalId);
        }
    }, [theme]);

    // Conditionally render the component based on the theme
    if (theme !== "dark") {
        return null; // Return null if not in dark mode
    }

    // Create an array of length numberOfStars
    const stars = Array.from({ length: numberOfStars });

    return (
        <div className={`starsDiv ${theme}`}>
            <div className="fallingStar" ref={fallingStarRef}>
                <img id="fallingStar" src={fallingStarImg} alt="" />
            </div>
            {/* Map over the array to render StarComponent */}
            {stars.map((_, index) => (
                <div className="lightStar" key={index}>
                    <img id="star" src={star} alt="" />
                </div>
            ))}
        </div>
    );
}

export default Star;

