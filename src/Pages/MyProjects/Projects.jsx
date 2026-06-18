
import "./Projects.css";
import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContecs";
import webIcon from '../../Assets/uehih159jjn0515185cibslqea.png';
import linkIcon2 from '../../Assets/history-of-the-world-wide-web-website-internet-world-wide-web-consortium-www-png-pic-729057b1059092333b44a81be522843d.png';
import BluPrintLogo from '../../Assets/logoBluPrint.png';
import amindi from '../../Assets/amindi1.jpg';
import BSLogo from '../../Assets/BestSoftLogo.png';
import pricetracker from '../../Assets/pricetracker.png';
import FishHunt from '../../Assets/fh.png';
import PixelStudio from '../../Assets/Yellow.png';
import Odedoo from '../../Assets/odedoo.png';
import soulart from '../../Assets/soulart.png';
import myhunter from '../../Assets/myhunter.png';
import salxino from '../../Assets/salxino.png';
import besthotel from '../../Assets/besthotel.png';
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
        link: "https://pixelstudio-app.vercel.app/"
    },
     {
        name: "SoulArt",
        description: "Soulart",
        image: soulart,
        link: "https://soulart.ge"
    },
     {
        name: "MyHunter",
        description: "Online Market",
        image: myhunter,
        link: "https://myhunter.ge"
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
        link: "https://blue-print-georgia.vercel.app/"
    },
    {
        name: "Salxino",
        description: "Salxinos Page",
        image: salxino,
        link: "https://salxino.vercel.app/"
    },
    {
        name: "BestHotel",
        description: "Best Hotel Page",
        image: besthotel,
        link: "https://besthotel.vercel.app/"
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
        link: "https://fishhunt.ge/"
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
    const { theme } = useContext(ThemeContext);
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
