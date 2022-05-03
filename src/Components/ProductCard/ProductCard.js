import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = (product) => {
  return (
    <div className="card">
      <Link to="/productDetails"><img src={product.img} alt={product.name} /></Link>
      <div className="productInfos">
        <Link to="/productDetails" id={product.id}><h3>{product.name}</h3></Link>
      <span>From {product.price.small}€</span>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
