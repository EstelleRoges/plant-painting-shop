import React, { useContext, useEffect } from "react";
import { CheckoutArea, ShippingAdressArea } from "./paymentCornerStyle";
import { Link } from "react-router-dom";
import ArticlesTable from "../../Components/ArticlesTable/ArticlesTable";
import ShippingAdress from "../../Components/ShippingAdress/ShippingAdress";
import { SucciContext } from "../../Constants/SucciContext";

const Checkout = () => {
  const { setCartItems, emptyCart, recap, setRecap } = useContext(SucciContext);

  useEffect(() => {
    setRecap(false);
  }, [setRecap]);

  return (
    <>
      <h2>Récapitulatif de la commande</h2>
      <CheckoutArea>
        <ArticlesTable recap={recap} />
        <ShippingAdressArea>
          <h2>Livraison à l'adresse</h2>
          <ShippingAdress />
          <Link to="/PaymentAccepted">
            <button
              onClick={() => emptyCart(setCartItems)}
            >
              Commander!
            </button>
          </Link>
        </ShippingAdressArea>
      </CheckoutArea>
    </>
  );
};

export default Checkout;
