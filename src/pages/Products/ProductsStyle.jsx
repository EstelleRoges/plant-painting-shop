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
`;

export const Option = styled("div")`
    padding: 1.5em 0;
`;

export const ProductsNavigation = styled("div")`
  margin: 3em 1em;
  padding: 1em;
  width: 350px;
  height: fit-content;
  border-radius: 2em;
  box-shadow: 0px 4px 15px #ADD09F;
`;

export const Cards = styled("div")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2em;
  padding: 1em 2em;
  justify-items: center;
  align-items: stretch;
`;

export const Card = styled("div")`
  margin: 0%;
  width: 350px;
`;
