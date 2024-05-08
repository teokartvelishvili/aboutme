import { useState } from "react";
import "./Header.css";
import "../Toggle/toggle.css";
import Navbar from "../Navbar/Navbar";
import logoLight from "../../Assets/teo logo light.png";
import ToggleSwitch from "../Toggle/Toggle";
import lemon from '../../Assets/Property 1=orange, Property 2=on.png';
import orange from '../../Assets/Property 1=orange, Property 2=off.png'



const Header = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [theme, setTheme] = useState("light");
  
    const handleChange = () => {
      setIsChecked(!isChecked);
      setTheme(theme === "light" ? "dark" : "light");
        };

return (
<div className="headerMainDiv">
    <div className="LogoCont">
            <img src={logoLight} alt="" />  
        </div>

        <div className="ThemeToggle">
      {/* Example usage */}
      <ToggleSwitch checked={isChecked} onChange={handleChange} image={lemon} image2={orange} />
    </div>

        <div className="navbar">
        <Navbar/>
        </div>
</div>
)
};

export default Header