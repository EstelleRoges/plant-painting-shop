import React from "react";
import { Button, ImageList, ImageListItem, styled } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import imageList from "../Lists/imageList";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <BannerArea>
      <Splide
        options={{
          // type: "loop",
          height: "500px",
          arrows: false,
          // autoplay: true,
          // interval: "6000",
        }}
      >
        <SplideSlide>
          <FirstSlide>
            <div>
              <h2>Nouveaux tableaux!!</h2>
              <Button variant="contained">
                <Link to="/products">Allons voir!</Link>{" "}
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

const BannerArea = styled("div")`
  background-color: forestgreen;
  height: 500px;
`;

const FirstSlide = styled("div")`
  display: flex;
  z-index: 1;

  div {
    position: relative;
    width: 50%;
    z-index: 1;

    h2 {
      font-family: "Whisper", cursive, serif;
      font-weight: bold;
      margin: 2em 0 0.5em 1em;
      font-size: 55px;
    }

    Button {
      float: left;
      margin-left: 3em;
      font-size: 18px;
    }
  }
`;

const Image = styled("img")`
  width: 200px;
  height: 200px;
  border: 2px solid green;
  border-radius: 1em;
`;

const SecondSlide = styled("div")`
  height: 500px;
  background-image: url("./paintingShop_bannerSlide2.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    padding-top: 3em;
    font-size: 40px;
    text-align: center;
  }

  span {
    font-family: "Whisper", cursive, serif;
    font-weight: bold;
    font-size: 65px;
  }

  Button {
    margin-top: 1em;
    width: fit-content;
  }
`;
export default Banner;
