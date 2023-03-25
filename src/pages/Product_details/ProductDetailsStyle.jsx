import { styled } from "@mui/material";

export const DetailsArea = styled("div")`
  padding-top: 2em;
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 2em;
    margin-right: 3em;
    width: 400px;
    border: 4px outset var(--green-secondary);
    border-radius: 1em;
  }

  h2 {
    font-size: clamp(40px, 4.5vh, 44px);
    margin: 0.5em 0;
  }

  .textInfosArea {
    margin: 1.5em;
    padding-left: 2em;
  }

  .formatAndPrice {
    display: flex;
    align-items: center;

    select,
    input {
      margin: 1em;
      padding: 10px;
      outline: none;
      border: 1px solid var(--green-secondary);
      box-shadow: 1px 1px 5px var(--green-secondary);
    }

    select {
      width: 200px;
    }

    input {
      width: 60px;
      text-align: right;
    }
  }

  .priceSection {
    display: flex;
    align-items: center;
  }

  button {
    float: right;
    color: white;
    margin: 1.5em 1em 1em 0;
    padding: 0.5em 1em;
    border: none;
    border-radius: 0.5em;
    outline: none;
  }

  @media screen and (max-width: 992px) {
    img {
      margin: 0 1em 0 0;
      max-width: 300px;
    }

    h2 {
      margin: 0.5em 0;
      text-align: left;
    }

    .textInfosArea {
      margin: 0 0 0 1em;
      padding-left: 0;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;

    img {
      margin: auto;
      width: 100%;
    }

    h2 {
      margin: auto;
      margin-top: 0.5em;
      text-align: center;
    }

    .textInfosArea {
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .formatAndPrice {
      justify-content: center;
    }

    button {
      float: none;
      margin: auto;
      margin-top: 1em;
    }
  }

  @media screen and (max-width: 576px) {
    .formatAndPrice {
      flex-direction: column;
      justify-content: center;

      svg {
        transform: rotate(90deg);
      }

      #price {
        text-align: center;
      }
    }
  }
`;

export const DescriptionSection = styled("div")`
  margin: 3em 0;
  p {
    clear: both;
    padding: 2em 1em;
    border-top: 1px dashed var(--green-secondary);
    border-bottom: 1px dashed var(--green-secondary);
    text-align: left;
  }
`;

export const CommentsArea = styled("div")`
  display: flex;
  justify-content: space-evenly;

  h2 {
    margin: 0;
  }

  Button {
    margin: 1em 2em 3em 2em;
    padding: 1em;
    float: none;
    color: white;
    line-height: 15px;
  }

  svg {
    margin: 0 1px;
    font-size: 18px;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Comments = styled("div")`
  margin: 0 2em;
  div {
    margin: 2em 0;
    padding: 1em;
    background-color: white;
    border-radius: 2em;
    box-shadow: 4px 4px 10px var(--green-secondary);

    h4 {
      font-size: 22px;
    }

    p {
      margin-top: 0.5em;
      margin-left: 2em;
    }

    @media screen and (max-width: 770px) {
      p {
        margin: 0 0.5em;
      }
    }
  }
`;

export const SubArea = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div:first-of-type {
    margin-right: 1em;
  }
`;

export const NewComment = styled("div")`
  margin: 0 2em;
  h2 {
    margin-bottom: 1em;
  }

  div {
    margin: 0;
    width: 100%;
  }

  input {
    width: 100%;
  }

  Button {
    margin: 1em;
    margin-left: 0;
    float: none;
  }

  h4 {
    font-size: 22px;
  }

  p {
    margin-top: 0.5em;
    text-indent: 2em;
  }

  Button {
    margin: 1em 0;
    padding: 1em;
    float: none;
    color: white;
    line-height: 15px;
  }
`;

export const SimilarArea = styled("div")`
  margin-top: 3em;
  border-top: 1px dashed var(--green-secondary);

  h2 {
    margin: 0;
    padding: 0.5em;
  }
`;
