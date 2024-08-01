import React, { useContext } from "react"
import { ThemeContext } from "../../Hooks/ThemeContecs";
import "./Footer.css";
import git from '../../Assets/GitHub.webp';
import linkedin from '../../Assets/linkedin.webp';
import fb from '../../Assets/facebook.webp';
import inst from '../../Assets/instagram.webp';
import mail from '../../Assets/mail.webp';
import call from '../../Assets/calls.webp'

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footerContainer ${theme}`}>
      <div className="footerContent">
        <div><p>&copy; 2024 Teona Kartvelishvili. All rights reserved.</p></div>
        <div className="socIcons">
          <a href="https://github.com/teokartvelishvili?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img alt="GitHub" src={git} />
          </a>
          <a href="https://www.linkedin.com/in/teona-qartvelishvili-8a4005257/" target="_blank" rel="noopener noreferrer">
            <img alt="LinkedIn" src={linkedin} />
          </a>
          <a href="https://www.instagram.com/teo.kartvel?igsh=dnUzODMxcnZzN3p5&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img alt="Instagram" src={inst} />
          </a>
          <a href="https://www.facebook.com/teo.qartvel" target="_blank" rel="noopener noreferrer">
            <img alt="Facebook" src={fb} />
          </a>
          <a href="tel:+995551999055">
            <img alt="Phone" src={call} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
