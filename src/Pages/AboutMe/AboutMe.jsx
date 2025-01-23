import "./AboutMe.css";
import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContecs";
import Skills from "../../Components/Skills/Skills";

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`aboutContainer ${theme}`} id="container">

      <h1 id="about">About Me</h1>

      <Skills />

      <div className="aboutMeTextsCont">
        <div className="aboutMeTexts">
          <p>
            I am <strong>Teona Kartvelishvili</strong>, a full-stack developer with over <strong>3 years</strong> of experience. My primary tools and technologies include <strong className="highlight">React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Nest.js</strong>, and <strong>Express.js</strong>. Additionally, I have a strong foundation in <strong>Python</strong>, <strong>C#</strong>, and databases like <strong>Microsoft SQL</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, and <strong>Firebase</strong>.
          </p>
          <p>
            Alongside my development skills, I am proficient in <strong className="highlight">UI/UX design</strong> and <strong>graphic design</strong>. I have hands-on experience using tools like <strong>Figma</strong>, <strong>Adobe Photoshop</strong>, and <strong>Adobe Illustrator</strong>. This combination of technical expertise and design knowledge enables me to create seamless user experiences with visually compelling interfaces.
          </p>
          <p>
            My journey into the tech world began 3 years ago when I decided to fully commit to programming. Since then, I have continuously refined my skills and expanded my knowledge through various <strong className="highlight">funding opportunities</strong> and <strong className="highlight">scholarships</strong>. Today, I am driven by a passion for learning, innovation, and contributing to impactful projects. 
          </p>
          <p>
            Welcome to my portfolio, where you can explore my work, skills, and the dedication I bring to every project. 
          </p>
        </div>
        <div>
          <div className="ball-1"></div>
          <div className="ball-2"></div>
          <div className="ball-3"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
