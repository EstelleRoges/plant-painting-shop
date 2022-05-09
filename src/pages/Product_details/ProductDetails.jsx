import React, { useState, useEffect, useRef } from "react";
import "./ProductDetails.scss";
import { ArrowForward } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import productList from "../../Other/Lists/ProductList";

function ProductDetails() {
  const [productInfos, setProductInfos] = useState({});
  let params = useParams();

  let formatPrice = useRef();

  const productDetails = productList.find((prd) => {
    return prd.id === parseInt(params.id);
  });

  const {
    price: { small, medium, large },
  } = productDetails;

  useEffect(() => {
    const getProductInfos = () => {
    setProductInfos(productDetails);
  };
    getProductInfos();
  }, [productDetails]);
  
  const handleChange = (event) => {
    // const newFormat = formatPrice.current;
    // formatPrice = event.target.value;
    console.log(formatPrice);
  }

   return (
    <div className="productDetailsContent">
      <div className="detailsArea">
        <img src={productInfos.img} alt={productInfos.name} />
        <div className="textInfosArea">
          <h1>{productInfos.name}</h1>
          <div className="formatAndPrice">
            <select name="paintingFormat" id="formats" onChange={(e) => {handleChange(e)}}>
              <option disabled defaultValue hidden>
                Format
              </option>
              <option value={small} id="small">
                Small - 20 x 20 cm
              </option>
              <option value={medium} id="medium">
                Medium - 35 x 35 cm
              </option>
              <option value={large} id="large">
                Large - 50 x 50 cm
              </option>
            </select>
            <ArrowForward />
            <input type="text" name="price" id="price" ref={formatPrice} value = {formatPrice.toString()} /> €
          </div>
          <button type="submit">Add to Cart</button>
        </div>
      </div>
      <p className="productDescription">{productInfos.description}</p>
      <div className="commentsArea">Try putting comments in here</div>
    </div>
  );
}

export default ProductDetails;
