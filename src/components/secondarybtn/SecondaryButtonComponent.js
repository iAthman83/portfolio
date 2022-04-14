import React from "react";
import "./secondarybtn.css";

const SecondaryButtonComponent = (props) => {
  return (
    <button class="btn__secondary-btn">
      <span>{props.title}</span>
      <svg viewBox="0 0 13 10" height="10px" width="15px">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
  );
};

export default SecondaryButtonComponent;
