import React from "react";
import "./Cart.scss";
import { Button, styled } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Cart = (items) => {
  const { cartItems, onAdd, onRemove, onDelete } = items;
  return (
    <div>
      <div>
        {cartItems.length === 0 ? (
          <div>
            <p>Your cart is empty...</p>
            Go <Link to="/products"> shopping</Link>!
          </div>
        ) : (
          <CartTable>
            <thead>
              <tr>
                <td colSpan="2">Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
                <td>Options</td>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.img}</td>
                    <td>{item.name}</td>
                    <td>{item.price}€</td>
                    <td>{cartItems.quantity}</td>
                    <td>
                      {cartItems.quantity !== 1
                        ? item.price * cartItems.quantity
                        : item.price.toFixed(2)}
                      €
                    </td>
                    <td>
                      <Button onClick={onAdd}>
                        <Add />+
                      </Button>
                      <Button onClick={onRemove}>
                        <Remove />-
                      </Button>
                      <Button
                        onClick={() => {
                          item.onDelete(item.id);
                        }}
                      >
                        <Delete />x
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5">Total</td>
                <td></td>
              </tr>
            </tfoot>
          </CartTable>
        )}
      </div>
    </div>
  );
};

const CartTable = styled("table")`
  width: 100%;
  margin-top: 2em;
  border: 1px solid black;
`;

export default Cart;
