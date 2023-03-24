import { styled } from "@mui/material";

export const SignInUpContent = styled("div")`
  padding: 2em;
  display: flex;
  justify-content: space-evenly;
  text-align: start;

  h2 {
    text-align: center;
    font-size: 34px;
    margin-left: 0;
    margin-bottom: 1em;
  }

  .signInArea,
  .signUpArea {
    margin: 1em 3em;
    width: 100%;

    .form {
      margin: 0 auto;
      display: flex;
      justify-content: center;

      form {
        width: 100%;
        max-width: 400px;
      }
    }
  }

  hr {
    border: 1px dashed var(--green-secondary);
    margin: 0;
  }

  .signUpBtn {
    text-align: end;
  }

  button {
    margin-top: 0;
    a {
      color: white;
    }
  }

  @media screen and (max-width: 992px) {
    .signInArea,
    .signUpArea {
      margin: 0;
      width: 100%;
    }

    .signInArea {
      margin-right: 3em;
    }
    .signUpArea {
      margin-left: 3em;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    .signInArea,
    .signUpArea {
      margin: 0;
      margin-bottom: 2em;
      width: 100%;
    }
  }
`;
