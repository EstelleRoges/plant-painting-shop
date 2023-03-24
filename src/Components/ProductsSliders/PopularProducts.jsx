import React from "react";
import { styled } from "@mui/material";
import productList from "../../Other/Lists/ProductList";
import ProductCard from "../ProductCard/ProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const PopularProducts = () => {
  productList.sort(function (articleA, articleB) {
    return articleB.sold - articleA.sold;
  });

  const topFive = productList
    .sort(function (productA, productB) {
      return productA.sold < productB.sold ? 0 : productA.sold ? -1 : 1;
    })
    .slice(0, 5);

  return (
    <PopsDiv>
      <h2>Tableaux populaires</h2>
      <Splide
        options={{
          perPage: 3,
          breakpoints: {
            768: {
              perPage: 1,
            },
          },
          perMove: 1,
          pagination: false,
          fixedWidth: "320px",
          drag: "free",
          gap: "1em",
          wheel: true,
          releaseWheel: false,
        }}
      >
        {topFive.map((product) => {
          return (
            <SplideSlide
              key={product.id}
              style={{ width: "300px", paddingBottom: "0", marginRight: "0" }}
            >
              <ProductCard
                id={product.id}
                img={product.img}
                name={product.name}
                price={product.price}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </PopsDiv>
  );
};

const PopsDiv = styled("section")`
  margin-bottom: 5em;
  box-sizing: border-box;

  h2 {
    margin: 0;
    margin-bottom: 0.5em;
    padding-bottom: 0.2em;
    font-size: clamp(24px, 3vw, 34px);
    border-bottom: 1px dashed var(--green-secondary);
  }

  li {
    margin: 0;
    justify-content: center;
  }
`;

export default PopularProducts;
