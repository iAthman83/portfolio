import React from "react";
import "./card.css";

const CardComponent = (props) => {
  const { backgroundColor } = props;
  return (
    <div className="card__body">
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
