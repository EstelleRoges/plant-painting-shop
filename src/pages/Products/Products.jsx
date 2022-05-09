import React from "react";
import productList from "../../Other/Lists/ProductList";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { styled } from "@mui/material";

const Products = () => {
  return (
    <>
      <Cards>
        {productList.map((product) => {
          return (
            <Card key={product.id}>
              <ProductCard {...product} />
            </Card>
          );
        })}
      </Cards>
    </>
  );
};

const Cards = styled("div")`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 4em;
  padding: 1em 2em;
  justify-items: center;
  align-items: stretch;
`;

const Card = styled("div")`
  margin: 0%;
  width: 350px;
`;
export default Products;
