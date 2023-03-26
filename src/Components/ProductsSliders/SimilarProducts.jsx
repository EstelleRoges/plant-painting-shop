import { styled } from "@mui/material";
import productList from "../../Other/Lists/ProductList";
import ProductCard from "../ProductCard/ProductCard";

const SimilarProducts = () => {
  productList.sort(function (articleA, articleB) {
    return articleA.sold - articleB.sold;
  });

  const similars = productList.slice(0, 3);

  return (
    <SimilarDiv>
      <h2>Produits similaires</h2>
      <SimilarList>
        {similars.map((product) => {
          return (
            <ProductCard
              key={product.id}
              {...product}
            />
          );
        })}
      </SimilarList>
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

const SimilarList = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default SimilarProducts;
