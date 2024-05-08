import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return(
        <div className="NavCont">
        <ul className="UlCont">
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/Projects"> My Projects</Link> </li>
            <li><Link to="/About">About Me</Link> </li>
            <li><Link to="/Contact">Contact</Link> </li>
        </ul>
        </div>
        
    )
}
export default Navbar