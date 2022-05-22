import { styled } from "@mui/material";
import productList from "../../Other/Lists/ProductList";
import ProductCard from "../ProductCard/ProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const PopularProducts = () => {  
  productList.sort(function (articleA, articleB) {
    return articleB.sold - articleA.sold;
  });
  
  const topFive = productList.slice(0, 5);

  return (
    <PopsDiv>
      <h1>Top 5 des tableaux à succès</h1>
      <Splide
        options={{
          perPage: 3,
          breakpoints: {
            768: {
              perPage: 1,
            }
          },
          perMove: 1,
          pagination: false,
          fixedWidth: "320px",
          drag: "free",
          gap: "1em",
          padding: {left: "5em", right: "5em"},
          wheel: true,
          releaseWheel: false
        }}
      >
        {topFive.map((product) => {
          return (
            <SplideSlide key={product.id} style={{width: "300px", paddingBottom: "0"}}>
            <ProductCard id = {product.id} img={product.img} name={product.name} price={product.price}/>  
            </SplideSlide>
          );
        })}
      </Splide>
    </PopsDiv>
  );
};

const PopsDiv = styled("div")`
  margin: 5em 2em;
  box-sizing: border-box;

  h1 {
    margin: 0;
    margin-bottom: 0.5em;
    padding-bottom: 0.2em;
    font-size: 44px;
    border-bottom: 1px dashed #ccc;
  }
`;

export default PopularProducts;