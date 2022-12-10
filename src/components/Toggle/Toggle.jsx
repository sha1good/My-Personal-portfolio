import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/context";

const Toggle = () => {
  const { dispatch, darkMode } = useContext(ThemeContext);
  const handleClick = () => {
    dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle">
      <img src={Sun} alt="" className="toggle-icon" />
      <img src={Moon} alt="" className="toggle-icon" />
      <div className="toggle-button" onClick={handleClick}
      style={{ left: darkMode ? 0 : "25px"}}></div>
    </div>
  );
};

export default Toggle;
