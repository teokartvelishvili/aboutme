import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContecs";
import "./Main.css";
import TEO from '../../Assets/TEO.jpg';
import CV from '../../Assets/Teona Kartvelishvili - portfolio.pdf';
import Lamp from "../../Components/Lamp/Lamp";

const MainPage = () => {
  const { theme } = useContext(ThemeContext); // Access ThemeContext

  return (
    <div id="home" className={`MainCont ${theme}`}>
      {/* თუ ღამის რეჟიმია აქტიური, გამოაჩინე Lamp კომპონენტი */}
      {theme === 'dark' && <Lamp />}
      
      {/* <CircleEffect /> */}
      {/* <CircleSquare /> */}

      <div className={`MainCont2 ${theme}`}>
        <div className={`leftDiv ${theme}`}>
          <h3>hello!</h3>
          <h1>I am Teona,<br /> a Web Developer </h1>
          <a href={CV} target="blank" className="download" id="download">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Download CV
</a>

        </div>
        <div className="rightDiv">
          <img src={TEO} alt="TEO" />
        </div>
      </div>
      <div className="footer">
        {/* <img src={footerImg} alt="" /> */}
      </div>
    </div>
  );
};

export default MainPage;
