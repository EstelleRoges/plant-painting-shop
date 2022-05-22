import { styled } from "@mui/material";

export const SignInUpContent = styled("div")`
  padding: 2em;
  display: flex;
  justify-content: space-evenly;

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
  border: 1px dashed #ccc;
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

`;