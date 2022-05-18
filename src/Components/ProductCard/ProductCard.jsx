import { Link } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
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

const linkStyle = {
  textDecoration: "none",
  fontSize: "22px",
  fontStyle: "italic"
};

const CardInfos = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardText = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: baseline;

  p {
    font-size: 18px;
    margin-bottom: 0;
    text-decoration: none;
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
