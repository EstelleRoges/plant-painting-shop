import { styled } from "@mui/material";

export const ProductsArea = styled("div")`
margin: auto;
  display: flex;
  justify-content: center;
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
  }
`;

export const ProductsNavigation = styled("div")`
  margin: 3em 0.5em;
  padding: 1em;
  width: 350px;
  height: fit-content;
  border-radius: 2em;
  box-shadow: 0px 4px 15px var(--green-secondary);

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
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media screen and (max-width: 665px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }

  @media screen and (max-width: 375px) {
    padding: 0;
  }
`;

export const Card = styled("div")`
  margin: 0;
  width: 300px;

  @media screen and (max-width: 1115px) {
    width: 280px;
  }
  @media screen and (max-width: 700px) {
    width: 260px;
  }
  @media screen and (max-width: 665px) {
    width: 240px;
  }
  @media screen and (max-width: 589px) {
    width: 300px;
  }
`;
