import { styled } from "@mui/material";

export const CheckoutArea = styled("div")`
  display: flex;
  align-items: flex-start;

  a {
    color: white;
  }
`;

export const EmptyCart = styled("div")`
  margin: 10em 3em;
  text-align: center;

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 18px;
  }

  a {
    color: green;
    font-style: italic;
    text-decoration: none;
  }
`;

export const CartTable = styled("table")`
  margin: 2em auto;
  width: 70%;
  border-collapse: collapse;
  font-size: 18px;

  thead tr,
  tbody tr {
    border-top: 1px solid black;
    border-bottom: 1px solid black;

    Button {
      background-color: transparent;
      min-width: 35px;

      &:hover {
        background-color: transparent;
      }
    }
  }

  td {
    text-align: center;
    vertical-align: middle;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        padding: 0 0.5em;
      }
    }

    a {
      color: black;
    }
  }

  svg {
    color: black;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 1em;
  }

  button {
    margin: 1em 0;
    a {
      color: white;
    }
  }
`;

export const Thead = styled("thead")`
  td {
    padding: 0.5em;
  }
`;

export const TotalTr = styled("tr")`
  td {
    padding: 0.5em;
    font-weight: bold;
    font-size: 22px;
  }

  td:nth-of-type(2) {
    text-align: start;
  }
`;

export const CartContent = styled("div")`
  a {
    color: white;
    text-decoration: none;
  }
`;

export const RowDiv = styled("div")`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-items: center;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 40px;
    letter-spacing: 1px;
  }

  p {
    margin: 0;
  }

  div {
    margin: 0 1em;
  }

  label {
    display: block;
  }
`;

export const SubInfo = styled("div")`
  margin: auto;
`;

export const ShippingAdressArea = styled("div")`
  margin: 1em;
  padding: 0.5em 0 1em 1em;
  border-left: 1px dashed #add09f;

  h2 {
    margin: 0 0 1em 0;
    font-size: 32px;
  }

  Button {
    margin: 0 1em;
  }
`;
