import { styled } from "@mui/material";

export const Header = styled("header")`
  background: linear-gradient(to bottom, #ADD09F 28%, #7db569 92%, rgba(255,255,255,0) 100%);
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: fit-content;
    display: flex;

    &:first-of-type {
      flex: 3;
      justify-content: flex-start;
    }
    &:nth-of-type(2) {
      flex: 6;
      justify-content: center;
    }
    &:last-of-type {
      flex: 3;
      justify-content: flex-end;
      #cartIcon {
    padding-bottom: 10px;
  }
    }
  }

svg {
  width: 26px;
  height: 26px;
}

  a {
    text-decoration: none;
    font-weight: bold;
    font-style: italic;
    font-size: 16px;
    color: #335228;
  }

  h1 {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 60px;
    font-style: normal;
    color: #335228;
    text-shadow: 0 0 1px #335228;
    border: none;
    text-align: center;
  }

  ul {
    width: fit-content;
    display: flex;
    list-style: none;
    padding: 0 0.5em;

    li {
      padding: 0 1.2em;
    }
  }
`;
