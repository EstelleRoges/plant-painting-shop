import { styled } from "@mui/material";

export const Header = styled("header")`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 18px;
    color: black;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 60px;
    color: green;
    border: none;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0 0.5em;

    li {
      padding: 0 1.5em;
    }
  }

  ul:last-child {
    cursor: pointer;
  }
`;