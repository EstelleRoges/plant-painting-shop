import React from "react";
import { styled } from "@mui/material";

const Banner = () => {
  return (
    <BannerArea>
      Banner
      <p>Slide with 2 elements:</p>
      <ol>
        <li>New painting(s)</li>
        <li>Art gallery in Paris</li>
      </ol>
    </BannerArea>
  );
};

const BannerArea = styled("div")`
  margin-top: 2em;
  background-color: wheat;
  height: 500px;
`;

export default Banner;
