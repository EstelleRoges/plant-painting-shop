import React from "react";
import "./ProductDetails.scss";
import {ArrowForward} from "@mui/icons-material";

function ProductDetails(product) {
  return (
    <div className="productDetailsContent">
      <div className="detailsArea">
          <img src={product.img} alt={product.name} />
        <div className="textInfosArea">
          <h1>{product.name} Painting name</h1>
          <div className="formatAndPrice">
            <select name="paintingFormat" id="formats">
                <option disabled defaultValue hidden>Format</option>
                <option value="small">Small - 20 x 20 cm </option>
                <option value="medium">Medium - 35 x 35 cm </option>
                <option value="large">Large - 50 x 50 cm </option>
              </select>
              <ArrowForward />
            <input type="text" name="price" id="price" />
          </div>
          <button type="submit">Add to Cart</button>
        </div>
      </div>
        <p className="productDescription">{product.desciption} Product description</p>
        <div className="commentsArea">
          Try putting comments in here
        </div>
    </div>
  );
}

export default ProductDetails;
