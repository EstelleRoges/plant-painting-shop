import { styled } from "@mui/material";

export const FooterArea = styled("div")`
  margin: auto;
  width: 100%;
  color: #335228;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 3%,
    #add09f 6%,
    #7db569 100%
  );
`;

export const FooterBox = styled("div")`
  margin: auto;
  margin-top: 3em;
  padding: 2em;
  max-width: 1400px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33%, 1fr));
  justify-items: center;
  align-items: stretch;

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
    div li {
      justify-content: center;
      text-align: center;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;

      ul {
        width: fit-content;
        div {
          width: 100%;
        }
        li {
          margin: auto;
          width: fit-content;
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
      grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    div {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
    }
    div:last-of-type {
      box-sizing: border-box;
      position: relative;
      grid-column: 1 / span 2;

      input {
        margin-bottom: 1em;
      }
      button {
        position: absolute;
        right: 0;
        bottom: -2.5em;
      }
    }
  }

  @media screen and (max-width: 768px) {
    div * {
      justify-content: center;
      text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 375px) {
    div {
      width: auto;
    }
     div:last-of-type {
      input {
      width: auto;
     }
     button {
      width: fit-content;
        position: absolute;
        right: 20%;
        bottom: -2.5em;
      }
     }
  }
`;

export const Copyright = styled("div")`
  margin-top: 3em;
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
