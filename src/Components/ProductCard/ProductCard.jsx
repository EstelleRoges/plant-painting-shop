import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./ProductCard.scss";

const ProductCard = (product) => {
  return (
    <div >
      <Card className=".card" id={product.id}>
        <CardContent>
          <CardMedia>
            <Link to={"/productDetails/" + product.id}>
              <img src={product.img} alt={product.name} />
            </Link>
          </CardMedia>
          <CardContent className="productInfos">
            <Link to={"/productDetails/" + product.id}>
              <h3>{product.name}</h3>
            </Link>
          </CardContent>
          {/* <span>From {product.price.small}€</span> */}
          <button>Add to Cart</button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
