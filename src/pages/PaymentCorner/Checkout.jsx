import { CheckoutArea, CartTable, ShippingAdressArea } from "./paymentCornerStyle";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArticlesTable from "../../Components/ArticlesTable/ArticlesTable";
import ShippingAdress from "../../Components/ShippingAdress/ShippingAdress";

const Checkout = (props) => {

  return (
    <>
    <h1>Récapitulatif de la commande</h1>
      <CheckoutArea>
      <CartTable>
        <ArticlesTable recap={props.recap} cartItems={props.checkout}/>
      </CartTable>
      <ShippingAdressArea>
      <h2>Livraison à l'adresse</h2>
        <ShippingAdress />
        <Button onClick={props.emptyCart} variant="contained" color="success">
                <Link to="/PaymentAccepted">Commander!</Link>
              </Button>
      </ShippingAdressArea>
    </CheckoutArea>
    </>
    
  );
};

export default Checkout;
