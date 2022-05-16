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

      button {
        padding: 0;
      }
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
`;