import { styled } from "@mui/material";

export const ProductsArea = styled("div")`
  display: flex;
  box-sizing: border-box;

  h2 {
    font-size: 36px;
    margin: 0;
  }

  Input[type="text"] {
    position: relative;
    padding: 0.5em;
    box-shadow: none;
  }

  svg {
    position: absolute;
    right: 5px;
    bottom: 5px;
  }

  @media screen and (max-width: 1115px) {
    flex-direction: column;
  }
`;

export const ProductsNavigation = styled("div")`
  margin: 3em 0.5em;
  padding: 1em;
  width: 350px;
  height: fit-content;
  border-radius: 2em;
  box-shadow: 0px 4px 15px #add09f;

  @media screen and (max-width: 1115px) {
    margin: 3.5em 2em;
    width: auto;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    margin: 0 0.5em;
  }
`;

export const Option = styled("div")`
  padding: 1.25em 0;

  @media screen and (max-width: 1115px) {
    padding: 1.25em;
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    padding: 1.25em 0;
    width: auto;
  }
`;

export const Cards = styled("div")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 1em;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 1115px) {
    width: auto;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export const Card = styled("div")`
  margin: 0%;
  width: 300px;

  @media screen and (max-width: 1115px) {
    width: 280px;
  }
  @media screen and (max-width: 640px) {
    width: 300px;
  }
`;
