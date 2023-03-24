import React, { useContext } from "react";
import { CheckoutArea, ShippingAdressArea } from "./paymentCornerStyle";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArticlesTable from "../../Components/ArticlesTable/ArticlesTable";
import ShippingAdress from "../../Components/ShippingAdress/ShippingAdress";
import { SucciContext } from "../../Constants/SucciContext";

const Checkout = () => {
  const { setCartItems, recap, emptyCart } = useContext(SucciContext);

  return (
    <>
      <h1>Récapitulatif de la commande</h1>
      <CheckoutArea>
        <ArticlesTable recap={!recap} />
        <ShippingAdressArea>
          <h2>Livraison à l'adresse</h2>
          <ShippingAdress />
          <Button onClick={emptyCart(setCartItems)} variant="contained" color="success">
            <Link to="/PaymentAccepted">Commander!</Link>
          </Button>
        </ShippingAdressArea>
      </CheckoutArea>
    </>
  );
};

export default Checkout;
