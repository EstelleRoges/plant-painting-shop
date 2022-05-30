import React from "react";
import { EmptyCart, CartContent, CartTable } from "./paymentCornerStyle";
import { Link } from "react-router-dom";
import ArticlesTable from "../../Components/ArticlesTable/ArticlesTable";

const Cart = (props) => {
  return (
    <>
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
          <CartTable>
          <ArticlesTable recap={props.recap} cartItems={props.cartItems} onAdd={props.onAdd} onRemove={props.onRemove} onDelete={props.onDelete}/>
          </CartTable>
        </CartContent>
      )}
    </>
  );
};

export default Cart;
