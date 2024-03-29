import { useContext } from "react";
import { Button } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  CartArea,
  Article,
  PriceSection,
  Total,
  CartFooter,
} from "../../pages/PaymentCorner/paymentCornerStyle";
import { SucciContext } from "../../Constants/SucciContext";

const ArticlesTable = () => {
  const { cartItems, setCartItems, onAdd, onRemove, onDelete, recap } =
    useContext(SucciContext);

  const getFormatType = (formatType, formatPrice) => {
    const format = [formatType.small, formatType.medium, formatType.large];
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
    <CartArea>
      {cartItems.map((item) => {
        return (
          <Article key={(item.id * parseFloat(item.formatPrice)).toString()}>
            <div>
              {recap && (
                <Button
                  onClick={() => {
                    onDelete(item, setCartItems);
                  }}
                >
                  <Delete />
                </Button>
              )}
            </div>
            <div>
              <Link to={"/productDetails/" + item.id}>
                <img src={item.img} alt={item.name} />
              </Link>
            </div>
            <div>
              <Link to={"/productDetails/" + item.id}>{item.name}</Link>
            </div>
            <div>
              Format:
              {getFormatType(item.price, item.formatPrice)}
            </div>
            <div>
              {recap ? (
                <div>
                  <Button
                    variant="text"
                    onClick={() => onRemove(item, cartItems, setCartItems)}
                  >
                    <Remove />
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="text"
                    onClick={() =>
                      onAdd(
                        item,
                        parseFloat(item.formatPrice),
                        cartItems,
                        setCartItems
                      )
                    }
                  >
                    <Add />
                  </Button>
                </div>
              ) : (
                <div>{item.quantity}</div>
              )}
            </div>
            <PriceSection>
              {parseFloat(item.formatPrice) * item.quantity}€
            </PriceSection>
          </Article>
        );
      })}
      <Total>
        <p>
          Total:
          {cartItems.reduce(
            (accumulator, product) =>
              accumulator + product.quantity * product.formatPrice,
            0
          )}
          €
        </p>
      </Total>
      {recap && (
        <CartFooter>
          <button><Link to="/checkout">
            Passer à la commande
          </Link></button>
        </CartFooter>
      )}
    </CartArea>
  );
};

export default ArticlesTable;
