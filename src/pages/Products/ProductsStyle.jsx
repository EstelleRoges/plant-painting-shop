import { styled } from "@mui/material";

export const ProductsArea = styled("div")`
  margin: auto;
  box-sizing: border-box;

  h2 {
    margin: 0;
    margin-bottom: 0.5em;
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
    align-items: center;
  }
`;

export const ProductsNavigation = styled("div")`
  margin: 3.5em 2em;
  padding: 1em;
  width: 90%;
  display: flex;
  justify-content: space-around;
  height: fit-content;
  border-radius: 2em;
  box-shadow: 0px 2px 7px var(--green-secondary);

  @media screen and (max-width: 640px) {
    flex-direction: column;
    margin: 0 0.5em;
  }
`;

export const Option = styled("div")`
flex: 1;
  padding: 1.25em 2em;

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
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  justify-content: space-evenly;
  align-items: center;
`;