import { styled } from "@mui/material";

export const Header = styled("header")`
  background-color: #578943;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;


  a {
    text-decoration: none;
    font-weight: bold;
    font-style: italic;
    font-size: 18px;
    color: #335228;
  }

  h1 {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 60px;
    font-style: normal;
    color: #7DB569;
    text-shadow: 0 0 10px #335228;
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

   #cartIcon {
      padding-bottom: 10px;
    }
`;