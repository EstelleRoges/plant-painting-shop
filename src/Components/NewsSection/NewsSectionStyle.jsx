import { styled } from "@mui/material";

export const NewsContainer = styled("section")`
  padding: 1em 0 3em 0;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 1em 1em white inset, 0 0 1em 1em white;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    var(--green-light) 20%,
    var(--green-light) 80%,

    rgba(255, 255, 255, 0) 100%
  );

    svg {
    color: white;
  }

  @media screen and (max-width: 865px) {
    flex-direction: column;
  }
`;

export const NewsBox = styled("div")`
  padding: 0.5em 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-bottom: 0.75em;
  }

  @media screen and (max-width: 865px) {
    padding: 0.5em 6em;
    flex-direction: column;
  }

  @media screen and (max-width: 650px) {
    padding: 0.5em 2.5em;
    flex-direction: column;

    button {
      margin-right: 0.45em;
      padding: 0.3em 0.5em;
    }
  }
`;

export const NewsLetterInput = styled("div")`
  display: flex;
  flex: 1;
  align-items: center;
  border: none;
  border-radius: 1em;
  box-shadow: 2px 2px 10px var(--green-secondary);
  background-color: white;

  input {
    margin: 0;
    box-shadow: none;
  }

  button {
    margin-right: 0.75em;
    padding: 0.5em 0.75em;
    border-radius: 0.75em;
  }

  @media screen and (max-width: 650px) {
    button {
      margin-right: 0.45em;
    }
  }
`;
