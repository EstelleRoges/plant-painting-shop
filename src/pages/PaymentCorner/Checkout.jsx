import { CheckoutArea, CartTable, RowDiv, ShippingAdressArea } from "./paymentCornerStyle";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Checkout = (props) => {
  const {checkout, emptyCart} = props;

  return (
    <>
    <h1>Récapitulatif de la commande</h1>
      <CheckoutArea>
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
        <Button onClick={emptyCart} variant="contained" color="success">
                <Link to="/PaymentAccepted">Commander!</Link>
              </Button>
      </ShippingAdressArea>
    </CheckoutArea>
    </>
    
  );
};

export default Checkout;
