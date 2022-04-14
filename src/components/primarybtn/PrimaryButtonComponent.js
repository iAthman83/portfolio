import React from "react";
import "./primarybtn.css";

const PrimaryButtonComponent = (props) => {
  console.log(props);
  return <button className="btn__primary-btn">{props.title}</button>;
};

export default PrimaryButtonComponent;
