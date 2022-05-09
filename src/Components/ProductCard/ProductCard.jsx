import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia } from "@mui/material";
import { AddShoppingCart, ArrowForward } from "@mui/icons-material";
import { styled } from "@mui/material";

const ProductCard = (product) => {
  return (
    <>
      <Card
        id={product.id}
        sx={{
          margin: "2em 1em",
          border: "2px solid transparent",
          borderRadius: "1em",
          boxShadow: "2px 2px 10px #ccc",
        }}
      >
        <CardContent>
          <CardMedia>
            <ImgContent>
              <Link to={"/productDetails/" + product.id}>
                <img src={product.img} alt={product.name} />
              </Link>
            </ImgContent>
          </CardMedia>
          <CardInfos>
          <CardText>
            <Link to={"/productDetails/" + product.id} style={linkStyle}>
              {product.name}
            </Link>
            <p><ArrowForward />From {product.price.small}€</p>
          </CardText>
            <button>
              <AddShoppingCart />
            </button>
          </CardInfos>
        </CardContent>
      </Card>
    </>
  );
};

const linkStyle = {
  textDecoration: "none",
};

const CardInfos = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardText = styled("div")`
  p {
    margin: 0.2em 0;

    svg {
      margin-right: 0.3em;
      vertical-align: middle;
    }
  }
`;

const ImgContent = styled("div")`
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

export default ProductCard;
