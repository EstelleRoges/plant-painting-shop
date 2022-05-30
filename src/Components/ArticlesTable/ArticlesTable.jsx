import { Button } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { CartTable, Thead, TotalTr } from "../../pages/PaymentCorner/paymentCornerStyle";

const ArticlesTable = (props) => {
  const { recap, cartItems, onAdd, onRemove, onDelete } = props;

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
    <CartTable>
      <Thead>
        <tr>
          <td width="30px"></td>
          <td width="100px">Image</td>
          <td>Nom</td>
          <td>Format</td>
          <td width="100px">Prix unitaire</td>
          <td width="70px">Quantité</td>
          <td width="70px">Total</td>
        </tr>
      </Thead>
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
              <td>
                <Link to={"/productDetails/" + item.id}>
                  <img src={item.img} alt={item.name} width="100px" />
                </Link>
              </td>
              <td>
                <Link to={"/productDetails/" + item.id}>{item.name}</Link>
              </td>
              <td>{getFormatType(item.price, item.formatPrice)}</td>
              <td>{parseFloat(item.formatPrice)}€</td>
                <td>
              {recap ? (
                  <div>
                    <Button variant="text" onClick={() => onRemove(item)}>
                      <Remove />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button variant="text" onClick={() => onAdd(item)}>
                      <Add />
                    </Button>
                  </div>
              ) : (
                <div>{item.quantity}</div>
              )}
                </td>
              <td>{parseFloat(item.formatPrice) * item.quantity}€</td>
            </tr>
          );
        })}
        <TotalTr>
          <td></td>
          <td colSpan={5}>Total</td>
          <td>
            {cartItems.reduce(
              (accumulator, product) =>
                accumulator + product.quantity * product.formatPrice,
              0
            )}
            €
          </td>
        </TotalTr>
      </tbody>
      {recap && (
        <tfoot>
          <tr>
            <td colSpan={7}>
              <Button
                variant="contained"
                color="success"
              >
                <Link to="/checkout">Passer à la commande</Link>
              </Button>
            </td>
          </tr>
        </tfoot>
      )}
    </CartTable>
  );
};

export default ArticlesTable;
