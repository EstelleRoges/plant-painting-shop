import { useState } from "react";
import { CartTable } from "./paymentCornerStyle";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Checkout = (props) => {
  const [checkout, setCheckout] = useState(props.cartItems) ;

  function emptyCart() {
    setCheckout([]);
  }
  return (
      <div>
        <h1>Your cart</h1>
        <CartTable>
          <thead>
            <tr>
              <td></td>
              <td>Product</td>
              <td width="70px">Price</td>
            </tr>
          </thead>
          <tbody>
            {checkout.map((item) => {
              return (
                <tr key={item.id}>
                  <td width="100px">
                    <img src={item.img} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>{parseFloat(item.formatPrice)}€</td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={2}>Total</td>
              <td>
                {checkout.reduce(
                  (accumulator, product) =>
                    accumulator + product.quantity * product.formatPrice,
                  0
                )}
                €
              </td>
            </tr>
          </tbody>
        </CartTable>
        <Button onClick={emptyCart} variant="contained"><Link to="/PaymentAccepted">Purchase</Link></Button>
      </div>
  );
};

export default Checkout;
