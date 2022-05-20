import { styled } from "@mui/material";

export const CheckoutArea = styled("div")`
display: flex;
align-items: flex-start;
`;

export const EmptyCart = styled("div")`
  margin: 6em 3em;
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
  }

  td {
    padding: 0.5em 1em;
    text-align: center;
    vertical-align: middle;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  tr:last-child + td {
    text-align: start;
  }

  svg {
    color: black;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 1em;
  }

  button a {
    color: white;
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
  margin: 2em;
  margin-right: 0;

  h2 {
    margin: 0 0 1em 0;

    font-size: 32px;
  }
`;