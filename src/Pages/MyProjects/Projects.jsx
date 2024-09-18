
import "./Projects.css";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContecs";
import webIcon from '../../Assets/uehih159jjn0515185cibslqea.png';
import linkIcon2 from '../../Assets/history-of-the-world-wide-web-website-internet-world-wide-web-consortium-www-png-pic-729057b1059092333b44a81be522843d.png';
import linkIcon from '../../Assets/hyperlink-computer-icons-link-exchange-website-ico-download-links-8ec00b276d4eeaf491ac36c3d867ff97.png';
import image1 from '../../Assets/digital-nomad-girl-enjoying-working-with-computer-laptop-while-holiday-beach_962751-5920.jpg';
import BluPrintLogo from '../../Assets/logoBluPrint.png';
import amindi from '../../Assets/amindi1.jpg';
import BSLogo from '../../Assets/BestSoftLogo.png'

const projectsData = [
    {
        name: "BluPrint",
        description: "My first custom project",
        image: BluPrintLogo,
        link: "https://www.blueprintstudio.ge/" // Corrected link format
    },
    {
        name: "BestSoft",
        description: "Our first company from best friends",
        image: BSLogo,
        link: "https://best-soft-seven.vercel.app/" // Corrected link format
    },
    {
        name: "Weather",
        description: "Weather in georgia",
        image: amindi,
        link: "https://weather-phi-pink.vercel.app/" // Corrected link format
    },
    // {
    //     name: "project3",
    //     description: "Lorem ipsuicing elit. Modi, ducimus.",
    //     image: image1,
    //     link: "https://www.google.com" // Corrected link format
    // },
    // {
    //     name: "project3",
    //     description: "sectetur adipisicing elit. Modi, ducimus.",
    //     image: image1,
    //     link: "https://www.google.com" // Corrected link format
    // },

    // {
    //     name: "project4",
    //     description: "Lorem ipsumicin, ducimus.",
    //     image: image1,
    //     link: "https://www.google.com" // Corrected link format
    // }
];

const Projects = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(  
    <div className={`projectsPage ${theme}`}>  
    <div className={`projectsHead ${theme}`}>
        <div className={`projectsHeadIcon ${theme}`} ><img src={webIcon} alt="" /> </div>
        <h1>My Projects </h1>
        
        </div>
        <p id="projP">Other projects can be found on GitHub</p>
        <div id="boxesGrid">
                    {projectsData.map((service, index) => (
                <div key={index} className="boxCont">
                    <div className="box"><img src={service.image} alt="" /></div>
                    
                    <div className="hoverBox">
                        <div className="texts">

                        {/* <div className="hexagon"></div> */}
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                            <a href={service.link} target="_blank" rel="noopener noreferrer">
                                <button><img src={linkIcon2} alt="" /></button>
                            </a>
                        </div>
                    </div>    
                </div>
            ))}
        </div></div>  
    );
};

export default Projects;
