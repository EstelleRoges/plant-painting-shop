import React from "react";
import { Button, ImageList, ImageListItem} from "@mui/material";
import { BannerArea, FirstSlide, SecondSlide, Image } from "./BannerStyle";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import imageList from "../Lists/imageList";
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
            <ImageList
              sx={{
                transform: "rotate(-15deg)",
                position: "absolute",
                top: "-3em",
                right: "-8em",
              }}
              cols={3}
              rowHeight={205}
            >
              {imageList.map((image) => (
                <ImageListItem key={image.title}>
                  <Image src={image.img} alt={image.title} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
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
