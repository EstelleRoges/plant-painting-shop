import { styled } from "@mui/material";

export const FooterArea = styled("div")`
  padding: 1.5em 0;
  width: 100%;
  height: fit-content;
  background-color: #3C602E;
  bottom: 0;
`;

export const FooterBox = styled("div")`
  height: fit-content;
  display: flex;
  justify-content: space-around;

div {
    position: relative;
}

  input {
    min-width: 200px;
    max-width: 450px;
  }

  a {
    color: black;
  }
  
  button {
    position: absolute;
    bottom: 41px;
    right: 60px;
    border-radius: 10px;
  }
`;

export const Box = styled("div")`
  margin: 1.5em;

  h2 {
    font-size: 30px;
    margin-bottom: 0;
  }

`;

export const Copyright = styled("div")`
  padding: 1em;

  p {
    margin: 0;
    text-align: center;
  }
`;
