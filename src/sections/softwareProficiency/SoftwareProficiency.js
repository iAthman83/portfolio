import React, { useContext } from "react";
import "./softwareProficiency.css";

import { TitleComponent } from "../../components/index";
import { FaReact, FaNodeJs, FaWordpress, FaGitAlt } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { ThemeContext } from "../../context";

const SoftwareProficiency = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="software">
      <TitleComponent
        secondary="tools"
        primary="software & language proficiency"
      />
      <div className="software-wrapper">
        <div className="icon-box">
          <FaReact className="logo" color="#E6E8EB" size={25} />
          <p
            style={{ color: darkMode ? "#E6E8EB" : "#E6E8EB" }}
            className="info"
          >
            React
          </p>
        </div>
        <div className="icon-box">
          <FaNodeJs className="logo" color="#E6E8EB" size={25} />
          <p
            style={{ color: darkMode ? "#E6E8EB" : "#E6E8EB" }}
            className="info"
          >
            Node
          </p>
        </div>
        <div className="icon-box">
          <FaGitAlt className="logo" color="#E6E8EB" size={25} />
          <p
            style={{ color: darkMode ? "#E6E8EB" : "#E6E8EB" }}
            className="info"
          >
            Git
          </p>
        </div>
        <div className="icon-box">
          <FaWordpress className="logo" color="#E6E8EB" size={25} />
          <p
            style={{ color: darkMode ? "#E6E8EB" : "#E6E8EB" }}
            className="info"
          >
            WordPress
          </p>
        </div>
        <div className="icon-box">
          <DiPhotoshop className="logo" color="#E6E8EB" size={25} />
          <p
            style={{ color: darkMode ? "#E6E8EB" : "#E6E8EB" }}
            className="info"
          >
            Photoshop
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftwareProficiency;
