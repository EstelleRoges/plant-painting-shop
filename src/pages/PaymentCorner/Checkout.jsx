import { useState } from "react";
import { CartTable } from "./paymentCornerStyle";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Checkout = (props) => {
  const [checkout, setCheckout] = useState(props.cartItems);

  function emptyCart() {
    setCheckout([]);
  }

  return (
    <div>
      <h1>Récapitulatif de la commande</h1>
      <CartTable>
        <thead>
          <tr>
            <td colSpan={2}>Produit</td>
            <td width="70px">Quantité</td>
            <td width="70px">Prix</td>
          </tr>
        </thead>
        <tbody>
          {checkout.map((item) => {
            return (
              <tr key={item.id}>
                <td width="100px">
                  <Link to={"/productDetails/" + item.id}>
                    <img src={item.img} alt={item.name} />
                  </Link>
                </td>
                <td>
                  <Link to={"/productDetails/" + item.id}>{item.name}</Link>
                </td>
                <td>{item.quantity}</td>
                <td>{parseFloat(item.formatPrice)}€</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={3}>Total</td>
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
        <tfoot>
          <tr>
            <td colSpan={4}>
              <Button onClick={emptyCart} variant="contained" color="success">
                <Link to="/PaymentAccepted">Commander!</Link>
              </Button>
            </td>
          </tr>
        </tfoot>
      </CartTable>
    </div>
  );
};

export default Checkout;
