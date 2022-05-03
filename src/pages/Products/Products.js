import React from "react";
import "./Products.scss";
import productList from "../../Other/Lists/ProductList";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Products = () => {
  return (
    <>
      This is the product list
      <div className="cards">
        {productList.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </>
  );
};

export default Products;
