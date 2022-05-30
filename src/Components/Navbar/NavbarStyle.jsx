import { styled } from "@mui/material";

export const Header = styled("header")`
  background-color: #3C602E;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;


  a {
    text-decoration: none;
    font-size: 18px;
    color: black;
  }

  h1 {
    width: 500px;
    margin: 0;
    padding: 0;
    font-size: 60px;
    color: green;
    border: none;
    text-align: center;
  }

  ul {
    width: 300px;
    display: flex;
    list-style: none;
    padding: 0 0.5em;

    li {
      padding: 0 1.5em;
    }
  }
`;

export const SiteLinks = styled("ul")`
justify-content: flex-start;
`;


export const UserCorner = styled("ul")`
justify-content: flex-end;
`;