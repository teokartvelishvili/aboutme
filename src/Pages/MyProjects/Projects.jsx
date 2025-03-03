
import "./Projects.css";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContecs";
import webIcon from '../../Assets/uehih159jjn0515185cibslqea.png';
import linkIcon2 from '../../Assets/history-of-the-world-wide-web-website-internet-world-wide-web-consortium-www-png-pic-729057b1059092333b44a81be522843d.png';
import linkIcon from '../../Assets/hyperlink-computer-icons-link-exchange-website-ico-download-links-8ec00b276d4eeaf491ac36c3d867ff97.png';
import image1 from '../../Assets/digital-nomad-girl-enjoying-working-with-computer-laptop-while-holiday-beach_962751-5920.jpg';
import BluPrintLogo from '../../Assets/logoBluPrint.png';
import amindi from '../../Assets/amindi1.jpg';
import BSLogo from '../../Assets/BestSoftLogo.png';
import CanvasAnimation from "../../Components/CanvasAnimation/CanvasAnimation";
import pricetracker from '../../Assets/pricetracker.png';
import FishHunt from '../../Assets/fh.png';
import PixelStudio from '../../Assets/Yellow.png';
import Odedoo from '../../Assets/odedoo.png';
const projectsData = [
    {
        name: "BestSoft",
        description: "Best Soft With Best Friends",
        image: BSLogo,
        link: "https://bestsoft.ge"
    },
    {
        name: "PixelStudio",
        description: "App for photo studio with my UI/UX design",
        image: PixelStudio,
        link: "https://pixelstudio-fawn.vercel.app"
    },
    {
        name: "OdedOO",
        description: "A joint procurement platform",
        image: Odedoo,
        link: "https://odedoo.com"
    },
    {
        name: "BluPrint",
        description: "App for BluPrint studio",
        image: BluPrintLogo,
        link: "https://blue-print-project2024.vercel.app/"
    },
    {
        name: "Weather",
        description: "Weather forecast in Georgia",
        image: amindi,
        link: "https://weather-phi-pink.vercel.app/"
    },
    {
        name: "PriceTracker",
        description: "App for managing product prices and profit calculation with PDF export",
        image: pricetracker,
        link: "https://pricetracker-lemon.vercel.app/"
    },
    {
        name: "FishHunt",
        description: "My first UI/UX design project",
        image: FishHunt,
        link: "https://www.behance.net/gallery/213586383/FishHunt"
    },
    {
        name: "FishHunt",
        description: "Current project with Next.js and Nest.js",
        image: FishHunt,
        link: "https://fishhunt.vercel.app/"
    }


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
    <div id="projects" className={`projectsPage ${theme}`}>  
     
     {/* {theme === 'dark' && <CanvasAnimation/>} */}
    <div className={`projectsHead ${theme}`}>
        <div className={`projectsHeadIcon ${theme}`} ><img src={webIcon} alt="" /> </div>
        <h1>My Projects </h1>
        
        </div>
        <p id="projP">Other projects can be found on GitHub</p>
        <div className="boxGrid" id="boxesGrid">
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
