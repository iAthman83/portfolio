import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./title.css";

const TitleComponent = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="title__wrapper">
      <p className="title__secondary-title">{props.secondary}</p>
      <p
        style={{ color: darkMode && "#BDC1C6" }}
        className="title__primary-title"
      >
        {props.primary}
      </p>
    </div>
  );
};

export default TitleComponent;
