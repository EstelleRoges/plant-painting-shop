import { styled } from "@mui/material";

export const FooterArea = styled("div")`
  padding: 2em 0 1.5em 0;
  
  width: 100%;
  height: fit-content;
  color: #335228;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0) 3%, #ADD09F 6%, #7db569 100%);
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
    width: 350px;
    position: relative;
  }

  input {
    min-width: 200px;
    max-width: 450px;
  }

  a {
    color: #335228;
  }

  button {
    position: absolute;
    bottom: 41px;
    right: 8px;
    border-radius: 10px;
  }

  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    div {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;

      ul {
        width: 100%;

        li div {
          margin: auto;
          width: fit-content;
        }
      }

      &:last-child {
        position: static;

        input {
          max-width: 500px;
          margin-bottom: 1em;
        }
        button {
          position: static;
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    div {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;

      div:last-child {
        position: static;
        width: fit-content;

        input {
          margin-bottom: 1em;
        }
        button {
          position: static;
        }
      }
    }
  }
`;

export const Box = styled("div")`
  margin: 1.5em;

ul {
  width: fit-content;
}
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
