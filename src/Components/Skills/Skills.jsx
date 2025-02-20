import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContecs";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaAngular,
//   FaSass,
//   FaBootstrap,
// } from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
 
  const skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "SCSS" },
    // { name: "Bootstrap" },
    { name: "JavaScript"},
    { name: "TypeScript"},
    { name: "React" },
    { name: "Angular" },
    { name: "Next JS" },
    { name: "Node JS" },
    { name: "Express JS" },
    { name: "Nest JS" },
    { name: "Python" },
    { name: "Django"},
    { name: "C#" },
    { name: "ASP.NET" },
    { name: "Postgre SQL" },
    { name: "Microsoft SQL" },
    { name: "MongoDB" },
    { name: "Git/GitHub" },
    { name: "Figma" },
    { name: "Adobe Photoshop"},
    { name: "Adobe Illustrator" },

    // Add more skills as needed
  ];
  const Languages = [
    { name: "Georgian"},
    { name: "English"

     },
 

    // Add more skills as needed
  ];

  return (
    <div className="skillsContainer">

    <div className="skills">
        <h2 id="SK">SKILLS</h2>
      {skills.map((skill, index) => (
        <div key={index} className={`skill ${theme}`}>
          <div className="iconSkills">
            {/* {getSkillIcon(skill.name)} */}
            <div className="name">{skill.name}</div>
          </div>

          {/* <div className="level">{renderSkillLevel(skill.level)}</div> */}
        </div>
      ))}
    </div>

    <div className="skills">
        <h2 id="SL">Spoken Languages</h2>
      {Languages.map((Languages, index) => (
        <div key={index} className="skill">
          <div className="iconSkills">
            {/* {getSkillIcon(skill.name)} */}
            <div className="name">{Languages.name}</div>
          </div>

          {/* <div className="level">{renderSkillLevel(Languages.level)}</div> */}
        </div>
      ))}
    </div>
    </div>
  );
};

// Function to return appropriate icon based on skill name
// const getSkillIcon = (skillName) => {
//   switch (skillName) {
//     case "HTML":
//       return <FaHtml5 />;
//     case "CSS":
//       return <FaCss3Alt />;
//     case "JavaScript":
//       return <FaJs />;
//     case "React":
//       return <FaReact />;
//     case "Angular":
//       return <FaAngular />;
//     case "SCSS":
//       return <FaSass />;
//     case "Bootstrap":
//       return <FaBootstrap />;
//     default:
//       return null;
//   }
// };

const renderSkillLevel = (level) => {
  return (
    <div className="level-indicator">
      <div className="level-bar">
        <div className="level-fill" style={{ width: `${level * 20}%` }}></div>
      </div>
    </div>
  );
};

export default Skills;