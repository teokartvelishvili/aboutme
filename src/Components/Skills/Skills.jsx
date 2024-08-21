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
    { name: "HTML", level: 5 },
    { name: "CSS", level: 5 },
    { name: "SCSS", level: 4 },
    { name: "Bootstrap", level: 4 },
    { name: "JavaScript", level: 3 },
    { name: "React", level: 4 },
    { name: "Angular", level: 1 },
    { name: "React Native", level: 0.7 },
    { name: "Python", level: 2 },
    { name: "Django", level: 2 },
    { name: "C#", level: 1 },
    { name: "ASP.NET", level: 1 },
    { name: "Postgre SQL", level: 2 },
    { name: "Microsoft SQL", level: 2 },
    { name: "Figma", level: 0.7 },
    { name: "Adobe Photoshop" , level: 0.7 },
    { name: "Adobe Illustrator", level: 0.7 },

    // Add more skills as needed
  ];
  const Languages = [
    { name: "Georgian", level: 5 },
    { name: "English", level: 3 },
 

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

          <div className="level">{renderSkillLevel(skill.level)}</div>
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

          <div className="level">{renderSkillLevel(Languages.level)}</div>
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