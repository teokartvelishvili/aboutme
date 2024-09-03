import "./AboutMe.css";
import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContecs";
import Skills from "../../Components/Skills/Skills";

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`aboutContainer ${theme}`} id="container">

      <h1>About Me</h1>

      <Skills />
      <p>
        Hello! I'm <strong>Teona Kartvelishvili</strong>, a passionate web developer on an exciting journey of transformation and growth. A little over 2 years ago, I embarked on my programming adventure, immersing myself in the world of technology. I've dedicated myself to mastering web development, with strong skills in <strong className="highlight">HTML, CSS, JavaScript,</strong> and <strong className="highlight">React</strong>. Additionally, I have a foundational understanding of <strong>Angular, C#, Python</strong>, and databases like <strong>Microsoft SQL</strong> and <strong>PostgreSQL</strong>. Recently, I've begun exploring <em>ethical hacking</em>, and as of the past month, I have started diving into <strong className="highlight">UI/UX design</strong> and <strong>Node.js</strong>, which I plan to specialize in as I move forward in my career.
      </p>
      <p>
        Before diving into the world of coding, I had a fulfilling career as a <strong className="important">pharmacist</strong>. While I excelled in the pharmaceutical field, I reached a point where I felt the need for a change, a challenge, and a new way to channel my enthusiasm for technology. The decision to step out of my comfort zone and turn my passion for computers into a profession was a defining moment in my life.
      </p>
      <p>
        Five months ago, I made the bold decision to leave my successful career as a pharmacist to fully commit to programming. This shift has allowed me to focus entirely on my studies and projects, striving to be highly competitive in the tech market. My journey has been fueled by various <strong className="highlight">funding opportunities</strong> and <strong className="highlight">scholarships</strong>, which have enabled me to access a wealth of knowledge and resources.
      </p>
      <p>
        Every day, I am driven by my love for learning and the endless possibilities within the tech industry. I'm excited to continue growing, tackling new challenges, and contributing to innovative projects. Welcome to my portfolio, where you can witness the evolution of my skills and the dedication I bring to my work.
      </p>
    </div>
  );
};

export default AboutMe;
