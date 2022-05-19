import { styled } from "@mui/material";
import React from "react";

const WelcomeContent = () => {
  return (
    <WelcomeDiv>
      <h1>Bienvenue à Succi Place!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo
        cumque iusto ducimus nulla ab vitae ullam dolorum veniam maxime, in
        error aspernatur voluptatem labore unde repellat dolores accusantium
        tempora mollitia quia et suscipit autem sunt! Illum expedita aperiam
        impedit debitis quos officia nemo. Sequi velit minus nisi doloribus
        repellendus.
      </p>
    </WelcomeDiv>
  );
};

const WelcomeDiv = styled("div")`
  margin: 5em auto;
  width: 90%;
  text-align: center;

  h1 {
    font-size: 60px;
  }

  p {
    margin: 5em 0;
    font-size: 22px;
    text-align: justify;
  }
`;

export default WelcomeContent;
