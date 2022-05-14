import React, { useState, useEffect, useRef } from "react";
import "./ProductDetails.scss";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import productList from "../../Other/Lists/ProductList";

const ProductDetails = (props) => {
  const [productInfos, setProductInfos] = useState({});
  const [display, setDisplay] = useState(false);
  let params = useParams();

  //fetch the product from the passed id
  const productDetails = productList.find((prd) => {
    return prd.id === parseInt(params.id);
  });

  //Assign the found product object to productInfos
  useEffect(() => {
    const getProductInfos = () => {
      setProductInfos(productDetails);
    };
    getProductInfos();
  }, [productDetails]);

  //Destructuring the different prices
  const {
    price: { small, medium, large },
  } = productDetails;

  //Create a ref to change the price according to the user's choice
  let formatPrice = useRef(small);

  const { product = productInfos, onAdd } = props;

  const handleChange = (event) => {
    return (formatPrice.current.value = parseFloat(event.target.value));
  };

  const displayCreateCommentArea = () => {
    setDisplay(true);
  };

  return (
    <div className="productDetailsContent">
      <div className="detailsArea">
        <img src={productInfos.img} alt={productInfos.name} />
        <div className="textInfosArea">
          <h1>{productInfos.name}</h1>
          <div className="formatAndPrice">
            <select
              name="paintingFormat"
              id="formats"
              onChange={(e) => {
                handleChange(e);
              }}
            >
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
            <input
              type="text"
              name="price"
              id="price"
              defaultValue={small}
              ref={formatPrice}
            />
            €
          </div>
          <Button onClick={() => onAdd(product)}>Add to Cart</Button>
        </div>
      </div>
      <p className="productDescription">{productInfos.description}</p>
      <div className="commentsArea">
        <h2>Comments</h2>
        <div className="commentContainer">
          <h4>Néroli</h4>
          <p>Such a cute painting!</p>
        </div>
        <div className="commentContainer">
          <h4>Vasco</h4>
          <p>
            My GF loves this stuff...your painting made her so happy. Thanks for
            this.
          </p>
        </div>
        <Button onClick={displayCreateCommentArea}>Add a comment</Button>
        {display && (
          <form className="addCommentForm">
            <section>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="commenterName" id="name" />
              </div>
              <div>
                <label htmlFor="mail">Mail</label>
                <input type="text" name="commenterMail" id="mail" />
              </div>
            </section>
            <label htmlFor="comment">Comment</label>
            <textarea name="comment" id="" cols="30" rows="10"></textarea>
            <Button>Add</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
