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
          Have a look at my previous creations using React and WordPress
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
