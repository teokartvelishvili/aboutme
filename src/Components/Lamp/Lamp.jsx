import React, { useState } from 'react';
import styles from './Lamp.module.css';

const Lamp = () => {
    const [isLit, setIsLit] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleLight = () => {
        setIsLit(!isLit);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={styles.lampContainer} // ახალი კონტეინერი
            onClick={toggleLight}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.lamp}>
                <input type="checkbox" className={styles.switch} />
                <div 
                    className={`${styles.light} 
                                ${isLit ? styles.lit : ''} 
                                ${isHovered && !isLit ? styles.hovered : ''}`}>
                </div>
            </div>
        </div>
    );
};

export default Lamp;
