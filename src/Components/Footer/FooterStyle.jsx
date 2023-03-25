import { styled } from "@mui/material";

export const FooterArea = styled("div")`
  margin: auto;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    var(--green-secondary) 10%
  );

  h2 {
    color: var(--text-color);
  }
  p {
    margin: 0.3em 0;
  }
`;

export const FooterBox = styled("section")`
  margin: auto;
  margin-top: 3em;
  padding: 2em;
  padding-bottom: 0;
  max-width: 1400px;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;

  h2 {
    font-size: clamp(24px, 3vw, 34px);
    margin-bottom: 0;
    letter-spacing: 2px;
  }

  div {
    width: fit-content;
    position: relative;
  }

  input {
    min-width: 200px;
    max-width: 450px;
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
  padding: 1em;

  p {
    margin: 0;
    text-align: center;
  }
  a {
    color: white;
    padding: 0 5px;
  }

  svg {
    margin: 0.5em;
    width: 26px;
    height: 26px;
    color: white;
  }
`;
