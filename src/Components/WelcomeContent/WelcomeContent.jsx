import { styled } from "@mui/material";
import React from "react";

const WelcomeContent = () => {
  return (
    <WelcomeDiv>
      <h2>Bienvenue à Succi Place!</h2>
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

const WelcomeDiv = styled("section")`
  text-align: center;

  p {
    margin: 3em 0 5em 0;
    font-size: 20px;
    text-align: justify;
  }
`;

export default WelcomeContent;
