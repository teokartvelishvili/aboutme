import React from "react";
import "./Projects.css";
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
        <h1> My Projects </h1>
        <div id="boxesGrid">
                    {projectsData.map((service, index) => (
                <div key={index} className="boxCont">
                    <div className="box"><img src={service.image} alt="" /></div>
                    <div className="hoverBox">
                        <div className="texts">
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                            <a href={service.link} target="_blank" rel="noopener noreferrer">
                                <button>Go to the link</button>
                            </a>
                        </div>
                    </div>    
                </div>
            ))}
        </div></div>  
    );
};

export default Projects;
