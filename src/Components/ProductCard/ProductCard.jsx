import { Link } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import { linkStyle, CardInfos, CardText,ImgContent } from "./ProductCardStyle";

const ProductCard = (product) => {

  return (
    <>
      <Card
        id={product.id}
        sx={{
          margin: "2em 1em",
          border: "2px solid transparent",
          borderRadius: "1em",
          boxShadow: "2px 2px 10px #ADD09F",
        }}
      >
        <CardContent>
          <ImgContent>
            <Link to={"/productDetails/" + product.id}>
              <img src={product.img} alt={product.name} />
            </Link>
          </ImgContent>
          <CardInfos>
            <CardText>
              <Link to={"/productDetails/" + product.id} style={linkStyle}>
                {product.name}
              </Link>
              <p>A partir de {product.price.small}€</p>
            </CardText>
          </CardInfos>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
