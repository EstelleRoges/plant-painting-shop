import React from 'react';
import "./Cart.scss";

const Cart = (items) => {
  const {cartItems} = items;

  return (
    <div>
    Cart page
    {/* create a table */}
    <div>{cartItems.length === 0 && <div>cart is empty</div>}</div>
      {/* {cartItems.map((item) => {
        return item.name;
      })} */}
    </div>
  )
}

export default Cart;