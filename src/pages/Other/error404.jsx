import { styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import PopularProducts from "../../Components/ProductsSliders/PopularProducts";

const error404 = () => {
  return (
    <Error>
      Oups...ce tableau n'existe plus...
      <Link to="/products">Cherchons-en un autre!</Link>
      {/* <h2>Quelques suggestions:</h2> */}
      {/* <PopularProducts /> */}
    </Error>
  );
};

const Error = styled("div")`
  margin: 5em 2em;
  padding-top: 5em;
  height: 12vh;
  font-size: 20px;
  text-align: center;

  h2 {
    margin-top: 2em;
      font-size: clamp(40px, 4.5vh, 44px);
  }

  a {
    color: var(--brown-primary);
    font-size: 20px;
  }
`;
export default error404;
