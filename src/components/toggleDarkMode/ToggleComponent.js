import React, { useContext } from "react";
import "./toggle.css";

import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { ThemeContext } from "../../context";

const ToggleComponent = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="toggle">
      <BsSunFill color="#FDB813" className="toggle-icon" />
      <BsMoonFill color="#1b1e23" className="toggle-icon" />
      <div
        className="toggle-button"
        onClick={handleClick}
        style={{
          left: theme.state.darkMode ? 0 : 25,
          backgroundColor: darkMode && "#3aafa9",
        }}
      ></div>
    </div>
  );
};

export default ToggleComponent;
