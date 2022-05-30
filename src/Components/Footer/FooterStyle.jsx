import { styled } from "@mui/material";

export const FooterArea = styled("div")`
  padding: 1.5em 0;
  width: 100%;
  height: fit-content;
  color: white;
  background-image: linear-gradient(to bottom, #578943, #3D602F);
  bottom: 0;
`;

export const FooterBox = styled("div")`
  height: fit-content;
  display: flex;
  justify-content: space-around;

  h2 {
    font-size: 30px;
    margin-bottom: 0;
    letter-spacing: 2px;
  }

div {
    position: relative;
}

  input {
    min-width: 200px;
    max-width: 450px;
  }

  a {
    color: white;
  }
  
  button {
    position: absolute;
    bottom: 41px;
    right: 60px;
    border-radius: 10px;
  }

  svg {
    cursor: pointer;
  }
`;

export const Box = styled("div")`
  margin: 1.5em;


`;

export const Copyright = styled("div")`
  padding: 1em;

  p {
    margin: 0;
    text-align: center;
  }
  a {
    color: white;
    padding: 0 5px;
  }
`;
