import { styled } from "@mui/material";

export const CartContent = styled("div")`
  a {
    color: white;
    text-decoration: none;
  }
`;

export const CartArea = styled("div")`
flex-direction: column;
`;

export const CheckoutArea = styled("div")`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  Button a {
    color: white;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const EmptyCart = styled("div")`
  margin: 10em 3em;
  text-align: center;

  p {
    font-size: 18px;
  }

  a {
    color: green;
    font-style: italic;
    text-decoration: none;
  }

  ${'' /* @media screen and (max-width: 768px); */}
`;

export const Article = styled("section")`
  margin: 1em auto;
  padding: 1.5em;
  max-width: 850px;
  background-color: white;
  border-radius: 1.5em;
  box-shadow: 1px 1px 3px var(--green-secondary);
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 3vw auto auto auto auto 3vw;

  a {
    text-align: center;
    color: black;
    font-family: "Whisper", cursive;
    font-size: 34px;
    font-weight: bold;
  }

  svg {
    color: saddleBrown;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 1em;
  }

  div {
    padding: 0 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      padding: 0 0.5em;
    }
  }

  Button {
    background-color: transparent;
    min-width: 35px;

    &:hover {
      background-color: transparent;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 450px;
    grid-template-columns: auto auto;

    a {
      color: black;
      font-family: "Whisper", cursive;
      font-size: 26px;
      font-weight: bold;
    }

    div {
      padding: 0.25em 0;

      &:first-of-type {
        grid-column: 1 / span 3;
      }

      &:nth-of-type(2) {
        grid-column: 1 / span 2;
      }

      &:last-of-type {
        grid-column-start: 3;
        grid-column-end: 4;
      }
    }
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: auto;

    div {
      padding: 0.25em 0;
      &:nth-of-type(4) {
        grid-column: 1 / span 2;
      }
      &:last-of-type {
        grid-column: 1 / span 3;
      }
    }
  }

  @media screen and (max-width: 375px) {
    justify-content: center;
    img {
      width: 70px;
      height: 70px;
    }

    div {
      grid-column: 1 / span 3;
    }
  }
`;

export const PriceSection = styled("div")`
  font-size: 18px;
  font-weight: bold;
`;

export const Total = styled("div")`
  margin: 1.5em auto;
  padding: 1em 1.5em;
  max-width: 850px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 1.5em;
  box-shadow: 1px 1px 3px var(--green-secondary);

  p {
    margin: 0;
    font-size: 26px;
    font-style: italic;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    max-width: 450px;
  }
`;

export const CartFooter = styled("div")`
  display: flex;
  justify-content: center;
  button {
    padding: 0.5em 2em;
    float: none;
  }
  a {
    color: white;
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
  border-left: 1px dashed var(--green-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    width: 100%;
    margin: 0 0 1em 0;
  }

  Button {
    margin: 0 1em;
  }

  @media screen and (max-width: 992px) {
    border-top: 1px dashed var(--green-secondary);
    border-left: none;

    button {
      width: 100%;
      margin: auto;
    }
  }
`;
