import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContecs";
import "./Main.css"
import TEO from '../../Assets/TEO.jpg'

const MainPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access ThemeContext

  return (
    <div className={`MainCont ${theme}`}>
      <div className={`leftDiv ${theme}`}>
      <h3>hello!</h3>
      <h1>I am Teona,<br/> a Web Developer </h1>
      </div>
      <div className="rightDiv">
        <img src={TEO} alt="TEO" /></div>
    </div>
  );
};
export default MainPage;
