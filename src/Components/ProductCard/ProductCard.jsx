import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardInfos, CardText, ImgContent } from "./ProductCardStyle";

const ProductCard = (product) => {
  const [paintingTitle, displayPaintingTitle] = useState(false);
  return (
    <Link to={"/productDetails/" + product.id}>
      <Card
        onMouseEnter={() => displayPaintingTitle(true)}
        onMouseLeave={() => displayPaintingTitle(false)}
      >
        <ImgContent>
          <img src={product.img} alt={product.name} />
        </ImgContent>
        <CardInfos className={paintingTitle ? "hovered" : ""}>
          <CardText>
            <p>{product.name}</p>
            <span>A partir de {product.price.small}€</span>
          </CardText>
        </CardInfos>
      </Card>
    </Link>
  );
};

export default ProductCard;
