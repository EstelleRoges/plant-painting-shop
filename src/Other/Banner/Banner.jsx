import React from "react";
import { Button } from "@mui/material";
import { BannerArea, TextSection } from "./BannerStyle";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <BannerArea>
      <TextSection>
        <h2>La plante dans toute sa Splendeur</h2>
        <button>
          <Link to="/products">Découvrez les tableaux</Link>
        </button>
      </TextSection>
    </BannerArea>
  );
};

export default Banner;
