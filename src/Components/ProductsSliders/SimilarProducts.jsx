import { styled } from "@mui/material";
import productList from "../../Other/Lists/ProductList";
import ProductCard from "../ProductCard/ProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const SimilarProducts = () => {
  productList.sort(function (articleA, articleB) {
    return articleA.sold - articleB.sold;
  });

  const similars = productList.slice(0, 3);

  return (
    <SimilarDiv>
      <Splide
        options={{
          perPage: 3,
          pagination: false,
          fixedWidth: "320px",
          drag: "free",
          gap: "1em",
          wheel: true,
          releaseWheel: false,
          arrows: false
        }}
      >
        {similars.map((product) => {
          return (
            <SplideSlide
              key={product.id}
              style={{ margin: "1em", width: "150px", height: "150px" }}
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
    </SimilarDiv>
  );
};

const SimilarDiv = styled("div")`
  margin: 0 auto;
  box-sizing: border-box;

  ul {
    justify-content: center;
  }
`;
export default SimilarProducts;
