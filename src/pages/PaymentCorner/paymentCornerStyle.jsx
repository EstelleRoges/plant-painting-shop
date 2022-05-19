import { styled } from "@mui/material";

export const CartTable = styled("table")`
  margin: auto;
  width: 70%;
  margin-top: 2em;
  border-collapse: collapse;
  font-size: 18px;

thead tr, tbody tr {
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
      align-items: stretch;
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

export const CartContent = styled("div")`
  a {
    color: white;
    text-decoration: none;
  }
`;