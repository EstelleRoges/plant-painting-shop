import { styled } from "@mui/material";

export const ProductDetailsContent = styled("div")`
.detailsArea {
    padding-top: 2em;
    display: flex;
    justify-content: space-evenly;

    img {
      margin-left: 2em;
      margin-right: 3em;
      width: 400px;
      border: 6px ridge #ccc;
      border-radius: 1em;
    }

    h1 {
      font-size: 44px;
      margin: 0.5em 0;
    }
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
      border: 1px solid #ccc;
      box-shadow: 1px 1px 5px #ccc;
    }

    select {
      width: 180px;
    }

    input {
      width: 60px;
      text-align: right;
    }
  }

  button {
    float: right;
    background-color: green;
    color: white;
    margin: 1.5em 1em 1em 0;
    padding: 0.5em 1em;
    border: none;
    border-radius: 0.5em;
    outline: none;

    &:hover {
      background-color: lightgreen;
    }
  }

  .productDescription {
    clear: both;
    margin-top: 3em;
    padding: 1em;
    border-top: 1px dashed #ccc;
  }

  .commentsArea {
    margin-top: 3em;

    h2 {
      margin: 0;
      padding: 1em 0 0.5em 1em;
      border-top: 1px dashed #ccc;
      font-size: 36px;
    }

    button {
      margin: 3em 0 1em 2em;
      padding: 1em;
      float: none;
      color: white;
      line-height: 15px;
    }

    svg {
      margin: 0 1px;
      font-size: 18px;
    }
  }

  .addCommentForm {
    margin: 2em;
    max-width: 60%;

    section {
      display: flex;

      div {
        width: 50%;

        &:first-of-type {
          margin-right: 20px;
        }

        &:last-of-type {
          margin-left: 20px;
        }
      }
      input {
        width: 100%;
      }
    }

    button {
      margin: 1em;
      margin-left: 0;
      float: none;
    }
  }

  .commentContainer {
    margin: 2em;
    padding: 1em;
    max-width: 60%;
    background-color: white;
    border-radius: 2em;
    box-shadow: 4px 4px 10px #ccc;

    h4 {
      font-size: 22px;
    }

    p {
      margin-top: 0.5em;
      text-indent: 2em;
    }
  }
`;