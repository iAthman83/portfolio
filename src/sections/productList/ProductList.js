import React from "react";
import "./productlist.css";

import { products } from "../../data";

import ProductCard from "../productCard/ProductCard";

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="product-list-texts">
        <h1 className="product-list-title">Inspiring Creations</h1>
        <p className="product-list-description">
          I'm baby seitan food truck tumblr prism ugh man braid artisan health
          goth taxidermy green juice mlkshk pitchfork lo-fi.
        </p>
      </div>
      <div className="product-list-list">
        {products.map((product) => (
          <ProductCard key={product.id} img={product.img} link={product.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
