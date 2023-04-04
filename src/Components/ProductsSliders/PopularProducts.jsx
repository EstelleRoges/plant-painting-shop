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

  const topThree = productList
    .sort(function (productA, productB) {
      return productA.sold < productB.sold ? 0 : productA.sold ? -1 : 1;
    })
    .slice(0, 3);

  return (
    <PopsDiv>
      <h2>Top 3 des tableaux</h2>
      <TrioGrid>
        <div className="first">
          {
            <ProductCard
              id={topThree[0].id}
              img={topThree[0].img}
              name={topThree[0].name}
              price={topThree[0].price}
            />
          }
        </div>
        <div className="second">
          {
            <ProductCard
              id={topThree[1].id}
              img={topThree[1].img}
              name={topThree[1].name}
              price={topThree[1].price}
            />
          }
        </div>
        <div className="third">
          {
            <ProductCard
              id={topThree[2].id}
              img={topThree[2].img}
              name={topThree[2].name}
              price={topThree[2].price}
            />
          }
        </div>
      </TrioGrid>
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
    border-bottom: 1px dashed var(--green-secondary);
  }

  li {
    margin: 0;
    justify-content: center;
  }
`;

const TrioGrid = styled("div")`
  margin-top: 2em;
  height: fit-content;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1fr;
  gap: 1em 1em;
  grid-template-areas: "first second third";
  justify-items: center;
  align-items: center;

  .first {
    grid-area: first;
  }
  .second {
    grid-area: second;
  }
  .third {
    grid-area: third;
  }

  @media screen and (max-width: 1018px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "first first"
      "second third";
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "first"
      "second"
      "third";
  }
`;

export default PopularProducts;
