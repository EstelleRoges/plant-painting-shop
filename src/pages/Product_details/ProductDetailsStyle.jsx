import { styled } from "@mui/material";

export const DetailsArea = styled("div")`
  padding-top: 2em;
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 2em;
    margin-right: 3em;
    width: 400px;
    border: 4px outset #ADD09F;
    border-radius: 1em;
  }

  h1 {
    font-size: 44px;
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
      border: 1px solid #ADD09F;
      box-shadow: 1px 1px 5px #ADD09F;
    }

    select {
      width: 200px;
    }

    input {
      width: 60px;
      text-align: right;
    }
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
`;

export const DescriptionSection = styled("div")`
  margin: 3em 0;
  p {
    clear: both;
    padding: 2em 1em;
    border-top: 1px dashed #ADD09F;
    border-bottom: 1px dashed #ADD09F;
  }
`;

export const CommentsArea = styled("div")`
width: 60%;
  h2 {
    margin: 0;
    font-size: 36px;
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
`;

export const Comments = styled("div")`

  div {
    margin: 2em;
    padding: 1em;
    background-color: white;
    border-radius: 2em;
    box-shadow: 4px 4px 10px #ADD09F;

    h4 {
      font-size: 22px;
    }

    p {
      margin-top: 0.5em;
      text-indent: 2em;
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
margin: 2em;
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
    margin: 1em ;
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
  border-top: 1px dashed #ADD09F;
  h2 {
    margin: 0;
    padding: 0.5em;
    font-size: 36px;
  }
`;
