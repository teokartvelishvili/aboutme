import React from "react";
import "./Main.css"
import TEO from '../../Assets/TEO.jpg'

const MainPage = () => {
  return (
    <div className="MainCont">
      <div className="leftDiv">
      <h3>hello!</h3>
      <h1>I am Teona,<br/> a Web Developer </h1>
      </div>
      <div className="rightDiv">
        <img src={TEO} alt="TEO" /></div>
    </div>
  );
};
export default MainPage;
