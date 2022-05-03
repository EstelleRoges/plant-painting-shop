import "./ProductCard.scss";

const ProductCard = (product) => {
  return (
    <div>
    <span>{product.img}</span>
      <h3>{product.name}</h3>
      <span>From {product.price.small}€</span>
    </div>
  )
}

export default ProductCard;