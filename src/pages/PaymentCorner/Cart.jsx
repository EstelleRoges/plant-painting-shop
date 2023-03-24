import React, { useContext } from "react";
import { EmptyCart } from "./paymentCornerStyle";
import { Link } from "react-router-dom";
import ArticlesTable from "../../Components/ArticlesTable/ArticlesTable";
import { motion } from "framer-motion";
import { SucciContext } from "../../Constants/SucciContext";

const Cart = () => {
  const { recap, cartItems } = useContext(SucciContext);
  return (
    <>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {cartItems.length === 0 ? (
          <EmptyCart>
            <h2>Ah...votre panier est vide.</h2>
            <p>
              Allons <Link to="/products"> shopper</Link> !
            </p>
          </EmptyCart>
        ) : (
          <div style={{ margin: "auto" }}>
            <h1>Panier</h1>
            <ArticlesTable recap={recap} />
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Cart;
