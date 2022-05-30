import React from "react";
import { EmptyCart, CartContent, CartTable } from "./paymentCornerStyle";
import { Button } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
// import productList from "../../Other/Lists/ProductList";

const Cart = (props) => {
  const { cartItems, onAdd, onRemove, onDelete } = props;

  const getFormatType = (formatType, formatPrice) => {
    const format =[formatType.small, formatType.medium, formatType.large];
      switch (formatPrice) {
        case format[0]:
          formatType = "Petit";
          break;
        case format[1]:
          formatType = "Moyen";
          break;
        case format[2]:
          formatType = "Grand";
          break;
        default:
          formatType = "Format inconnu";
          break;
      }
        return formatType;
    };

  return (
    <>
      {cartItems.length === 0 ? (
        <EmptyCart>
          <h2>Ah...votre panier est vide.</h2>
          <p>
            Allons <Link to="/products"> shopper</Link> !
          </p>
        </EmptyCart>
      ) : (
        <CartContent style={{ margin: "auto" }}>
          <h1>Panier</h1>
          <CartTable>
            <thead>
              <tr>
                <td width="40px"></td>
                <td colSpan="2">Produit</td>
                <td>Format</td>
                <td width="70px">Prix unitaire</td>
                <td width="70px">Quantité</td>
                <td width="70px">Total</td>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr key={(item.id * parseFloat(item.formatPrice)).toString()}>
                    <td>
                      <Button
                        onClick={() => {
                          onDelete(item);
                        }}
                      >
                        <Delete />
                      </Button>
                    </td>
                    <td width="100px">
                      <Link to={"/productDetails/" + item.id}>
                        <img src={item.img} alt={item.name} />
                      </Link>
                    </td>
                    <td>
                      <Link to={"/productDetails/" + item.id}>{item.name}</Link>
                    </td>
                    <td>{getFormatType(item.price, item.formatPrice)}</td>
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
                <td colSpan={6}>Total</td>
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
                <td colSpan={7}>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ margin: "1em 0" }}
                  >
                    <Link to="/checkout">Passer à la commande</Link>
                  </Button>
                </td>
              </tr>
            </tfoot>
          </CartTable>
        </CartContent>
      )}
    </>
  );
};

export default Cart;
