import React from "react";
import { CartTable } from "./paymentCornerStyle";
import { Button } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Cart = (items) => {
  const { cartItems, onAdd, onRemove, onDelete } = items;
  console.log(cartItems);
  return (
    <>
      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty...</p>
          Go <Link to="/products"> shopping</Link>!
        </div>
      ) : (
        <div>
        <h1>Your cart</h1>
          <CartTable>
            <thead>
              <tr>
                <td width="40px"></td>
                <td colSpan="2">Product</td>
                <td width="70px">Price</td>
                <td width="70px">Quantity</td>
                <td width="70px">Total</td>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <Button
                        onClick={() => {
                          onDelete(item.id);
                        }}
                      >
                        <Delete />
                      </Button>
                    </td>
                    <td width="100px">
                      <img src={item.img} alt={item.name} />
                    </td>
                    <td>{item.name}</td>
                    <td>{parseFloat(item.formatPrice)}€</td>
                    <td>
                    <div>
                      <Button variant="text" onClick={() => onRemove(item)}>
                        <Remove />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button variant="text" onClick={() => onAdd(item)}>
                        <Add />
                      </Button>
                    </div>
                    </td>
                    <td>{parseFloat(item.formatPrice) * item.quantity}€</td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={5}>Total</td>
                <td>
                  {cartItems.reduce(
                    (accumulator, product) =>
                      accumulator + product.quantity * product.formatPrice,
                    0
                  )}
                  €
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6}>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ margin: "1em 0"}}
                  >
                    <Link to="/checkout">Proceed to checkout</Link>
                  </Button>
                </td>
              </tr>
            </tfoot>
          </CartTable>
        </div>
      )}
    </>
  );
};
export default Cart;
