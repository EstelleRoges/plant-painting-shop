import { styled } from "@mui/material";

export const FooterArea = styled("div")`
  width: 100%;
  background-color: beige;
  position: relative;
  bottom: 0;
`;

export const FooterBox = styled("div")`
  height: fit-content;
  display: flex;
  justify-content: space-around;

  a {
    color: black;
  }
`;

export const Box = styled("div")`
  margin: 1.5em;

  h2 {
    font-size: 30px;
    margin-bottom: 0;
  }
    Button {
      position: absolute;
      top: 3em;
      right: 3em;
      border-radius: 10px;
    }

`;

export const Copyright = styled("div")`
  padding: 1em;

  p {
    margin: 0;
    text-align: center;
  }
`;