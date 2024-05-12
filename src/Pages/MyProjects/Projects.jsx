import React from "react";
import "./Projects.css";
import webIcon from '../../Assets/uehih159jjn0515185cibslqea.png';
import linkIcon2 from '../../Assets/history-of-the-world-wide-web-website-internet-world-wide-web-consortium-www-png-pic-729057b1059092333b44a81be522843d.png';
import linkIcon from '../../Assets/hyperlink-computer-icons-link-exchange-website-ico-download-links-8ec00b276d4eeaf491ac36c3d867ff97.png';
import image1 from '../../Assets/digital-nomad-girl-enjoying-working-with-computer-laptop-while-holiday-beach_962751-5920.jpg';

const projectsData = [
    {
        name: "project1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ducimus.",
        image: image1,
        link: "https://www.google.com" // Corrected link format
    },
    {
        name: "project2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ducimus.",
        image: image1,
        link: "https://www.google.com" // Corrected link format
    },
    {
        name: "project3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ducimus.",
        image: image1,
        link: "https://www.google.com" // Corrected link format
    },
    {
        name: "project3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ducimus.",
        image: image1,
        link: "https://www.google.com" // Corrected link format
    },
    {
        name: "project3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ducimus.",
        image: image1,
        link: "https://www.google.com" // Corrected link format
    },
    {
        name: "project4",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ducimus.",
        image: image1,
        link: "https://www.google.com" // Corrected link format
    }
];

const Projects = () => {
    return(   <div className="projectsPage">  
      <div className="projectsHead">
        <div className="projectsHeadIcon" ><img src={webIcon} alt="" /> </div>
        <h1>My Projects </h1>
        </div>
        
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
