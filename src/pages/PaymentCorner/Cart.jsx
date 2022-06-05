import React from "react";
import { EmptyCart, CartContent } from "./paymentCornerStyle";
import { Link } from "react-router-dom";
import ArticlesTable from "../../Components/ArticlesTable/ArticlesTable";
import { motion } from "framer-motion";

const Cart = (props) => {
  return (
    <>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {props.cartItems.length === 0 ? (
          <EmptyCart>
            <h2>Ah...votre panier est vide.</h2>
            <p>
              Allons <Link to="/products"> shopper</Link> !
            </p>
          </EmptyCart>
        ) : (
          <CartContent style={{ margin: "auto" }}>
            <h1>Panier</h1>
            <ArticlesTable
              recap={props.recap}
              cartItems={props.cartItems}
              onAdd={props.onAdd}
              onRemove={props.onRemove}
              onDelete={props.onDelete}
            />
          </CartContent>
        )}
      </motion.div>
    </>
  );
};

export default Cart;
