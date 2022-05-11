import React from "react";
import "./productCard.css";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="product-card-browser">
        <div className="product-card-circle"></div>
        <div className="product-card-circle"></div>
        <div className="product-card-circle"></div>
      </div>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.img} alt="image" className="product-list-image" />
      </a>
    </div>
  );
};

export default ProductCard;
