import { styled } from "@mui/material";

export const NewsContainer = styled("section")`
  padding: 2em 0 3em 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  border-top: 1px dashed var(--green-secondary);
  border-bottom: 1px dashed var(--green-secondary);
  box-shadow: 0 0 1em 1em white inset, 0 0 1em 1em white;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    var(--green-light) 20%,
    var(--green-light) 80%,

    rgba(255, 255, 255, 0) 100%
  );
`;

export const NewsBox = styled("section")`
padding: 0.5em 3em;
display: flex;
flex-direction: column;
justify-content: center;

h2 {
    margin-bottom: 5px;
}
`;

export const NewsLetterInput = styled("div")`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 1em;
  box-shadow: 2px 2px 10px var(--green-secondary);
  background-color: white;

  input {
    margin: 0;
    box-shadow: none;
  }

  Button {
    margin-right: 0.75em;
    border-radius: 0.75em;
  }
`;
