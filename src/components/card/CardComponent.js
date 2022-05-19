import React, { useContext } from "react";
import "./card.css";

import { ThemeContext } from "../../context";

const CardComponent = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const accentColor = "#3aafa9";

  const { backgroundColor } = props;
  return (
    <div
      className="card__body"
      style={{ boxShadow: darkMode && `-2px 2px 2px 2px ${accentColor}` }}
    >
      <div className="card__content-wrapper">
        <div className="card__content-left">{props.children}</div>
        {/* <div className="card__content-right"> */}
        <div className="card__content-right-title" style={{ backgroundColor }}>
          {props.title}
        </div>
        <div className="card__content-right-description">
          {props.description}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default CardComponent;
