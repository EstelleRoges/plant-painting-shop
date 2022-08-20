import React from "react";
import { Button } from "@mui/material";
import { BannerArea, FirstSlide, SecondSlide} from "./BannerStyle";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <BannerArea>
      <Splide
        options={{
          type: "loop",
          height: "500px",
          arrows: false,
          autoplay: true,
          interval: "6000",
        }}
      >
        <SplideSlide>
          <FirstSlide>
            <div>
              <h2>Nouveaux tableaux!!</h2>
              <Button variant="contained" color="success">
                <Link to="/products">Allons voir!</Link>
              </Button>
            </div>
          </FirstSlide>
        </SplideSlide>
        <SplideSlide>
          <SecondSlide>
            <p>
              Ma Galerie d'art à <br />
              <span>Paris</span> !!
            </p>
            <Button variant="contained" disabled>
              Article en cours d'écriture!
            </Button>
          </SecondSlide>
        </SplideSlide>
      </Splide>
    </BannerArea>
  );
};

export default Banner;
