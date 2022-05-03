import React from 'react';
import "./Products.scss";
import productList from '../../Other/Lists/ProductList';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Products = () => {
  return (
    <>This is the product list
    {productList.map((product) => {
      return <ProductCard key = {product.index} {...product} />
    })}
    </>
  )
}

export default Products;