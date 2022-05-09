import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { styled } from "@mui/material";
const ProductCard = (product) => {
  return (
    <>
      <Card
        id={product.id}
        sx={{
          minWidth: "250px",
          margin: "2em 1em",
          border: "2px solid transparent",
          borderRadius: "1em",
          boxShadow: "2px 2px 10px #ccc",
        }}
      >
        <CardContent>
          <CardMedia
            sx={{
              width: "100%",
              height: "300px",
              objectFit: "contain",
              border: "1px solid transparent",
              borderRadius: "1em",
            }}
          >
            <ImgContent>
              <Link to={"/productDetails/" + product.id}>
                <img src={product.img} alt={product.name} />
              </Link>
            </ImgContent>
          </CardMedia>
          <CardInfos>
            <Link to={"/productDetails/" + product.id} style={linkStyle}>
              {product.name}
            </Link>
            {/* <span>From {product.price.small}€</span> */}
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
  display: "flex";
  justify-content: "space-between";
  align-items: "center";
`;

const ImgContent = styled("div")`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

export default ProductCard;
