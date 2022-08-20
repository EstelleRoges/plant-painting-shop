import React, { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import productList from "../../Other/Lists/ProductList";
import { motion } from "framer-motion";
import {
  DetailsArea,
  CommentsArea,
  Comments,
  NewComment,
  SubArea,
  SimilarArea,
  DescriptionSection,
} from "./ProductDetailsStyle";
import SimilarProducts from "../../Components/ProductsSliders/SimilarProducts";
// import ProductDetailsLogic, {productInfos, productDetails, product, handleChange, displayCreateCommentArea, display, small, medium, large, formatPrice, onAdd} from "./ProductDetailsLogic";

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

  const { onAdd } = props;

  const handleChange = (event) => {
    return (formatPrice.current.value = parseFloat(event.target.value));
  };

  const displayCreateCommentArea = () => {
    setDisplay(true);
  };

  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <DetailsArea>
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
                  Petit - 20 x 20 cm
                </option>
                <option value={medium} id="medium">
                  Moyen - 35 x 35 cm
                </option>
                <option value={large} id="large">
                  Grand - 50 x 50 cm
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
            <Button
              onClick={() =>
                onAdd(productInfos, parseFloat(formatPrice.current.value))
              }
            >
              Ajouter au panier
            </Button>
          </div>
        </DetailsArea>
        <DescriptionSection>
          <p className="productDescription">{productInfos.description}</p>
        </DescriptionSection>

        <CommentsArea>
          <Comments>
            <h2>Commentaires</h2>
            <div>
              <h4>Néroli</h4>
              <p>Ce tableau est vraiment trop mignon!</p>
            </div>
            <div>
              <h4>Vasco</h4>
              <p>
                Ma copine aime ce genre de tableau...et elle a adoré celui-ci.
                Merci!
              </p>
            </div>
            <Button
              variant="contained"
              color="success"
              onClick={displayCreateCommentArea}
            >
              Ajouter un commentaire
            </Button>
          </Comments>

          {display && (
            <NewComment>
              <h2>Nouveau commentaire</h2>
              <SubArea>
                <div>
                  <label htmlFor="name">Nom</label>
                  <input type="text" name="commenterName" id="name" />
                </div>
                <div>
                  <label htmlFor="mail">Mail</label>
                  <input type="text" name="commenterMail" id="mail" />
                </div>
              </SubArea>
              <div>
                <label htmlFor="comment">Commentaire</label>
                <textarea name="comment" id="" cols="30" rows="5"></textarea>
                <Button variant="contained" color="success">
                  Ajouter
                </Button>
              </div>
            </NewComment>
          )}
        </CommentsArea>
        <SimilarArea>
          <h2>Produits similaires</h2>
          <SimilarProducts />
        </SimilarArea>
      </motion.div>
    </>
  );
};

export default ProductDetails;
