import { styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PopularProducts from "../../Components/ProductsSliders/PopularProducts";

const error404 = () => {
  return (
    <Error>
      Oups...ce tableau n'existe plus...
      <Link to="/products">Cherchons-en un autre!</Link>
      <h1>Quelques suggestions:</h1>
      <PopularProducts />
    </Error>
  );
};

const Error = styled("div")`
  margin: 5em 2em;
  font-size: 20px;
  text-align: center;

  h1 {
    margin-top: 2em;
  }

  a {
    color: green;
  }
`;
export default error404;
