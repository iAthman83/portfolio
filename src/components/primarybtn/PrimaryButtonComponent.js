import React from "react";
import "./primarybtn.css";

const PrimaryButtonComponent = (props) => {
  return <button className="btn__primary-btn">{props.title}</button>;
};

export default PrimaryButtonComponent;
