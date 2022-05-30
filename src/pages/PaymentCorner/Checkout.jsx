import { CheckoutArea, CartTable, RowDiv, ShippingAdressArea } from "./paymentCornerStyle";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArticlesTable from "../../Components/ArticlesTable/ArticlesTable";

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
        <RowDiv>
          <div style={{ width: "25%" }}>
            <label htmlFor="streetNumber">N°</label>
            <input
              readOnly
              type="text"
              name="streetNumber"
              id="streetNumber"
              value={"12"}
            />
          </div>
          
          <div style={{ width: "75%" }}>
            <label htmlFor="streetType">Type de voie</label>
            <select name="streetType" id="streetType">
              <option value="streetType">Rue</option>
              <option value="streetType">Avenue</option>
              <option value="streetType">Allée</option>
              <option value="streetType">Ruelle</option>
              <option value="streetType">Boulevard</option>
              <option value="streetType">Chemin</option>
              <option value="streetType">Route</option>
            </select>
          </div>
          </RowDiv>
          <RowDiv>
          <div style={{ width: "100%" }}>
            <label htmlFor="userName">Nom de voie</label>
            <input
              readOnly
              type="text"
              name="city"
              id="city"
              value={"du Frontend"}
            />
          </div>
        </RowDiv>
        <RowDiv>
          <div>
            <label htmlFor="postalCode">Code postal</label>
            <input
              readOnly
              type="text"
              name="postalCode"
              id="postalCode"
              value={"99999"}
            />
          </div>
          <div>
            <label htmlFor="city">Ville</label>
            <input
              readOnly
              type="text"
              name="city"
              id="city"
              value={"LaVille"}
            />
          </div>
        </RowDiv>
        <Button onClick={props.emptyCart} variant="contained" color="success">
                <Link to="/PaymentAccepted">Commander!</Link>
              </Button>
      </ShippingAdressArea>
    </CheckoutArea>
    </>
    
  );
};

export default Checkout;
