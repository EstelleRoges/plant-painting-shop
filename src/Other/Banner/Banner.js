import React from "react";
import { Button, styled } from "@mui/material";
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
              <Button variant="contained">
                <Link to="/products">Allons voir!</Link>{" "}
              </Button>
            </div>
            <NewPaintings>
              <img
                src="https://i.pinimg.com/564x/f9/f0/b3/f9f0b3bdb3b60debc880e4f1959b0dd0.jpg"
                alt="bannerImg_slide1"
              />
              <img
                src="https://i.pinimg.com/564x/8c/7e/54/8c7e54ead5c59011bb2257f6f5acd918.jpg"
                alt="bannerImg_slide1"
              />
              <img
                src="https://i.pinimg.com/564x/7f/92/e0/7f92e0e7a27934a254720ccb5d561f05.jpg"
                alt="bannerImg_slide1"
              />
              <img
                src="https://i.pinimg.com/564x/19/35/2c/19352ccf414b31c9882d689154280d0e.jpg"
                alt="bannerImg_slide1"
              />
              <img
                src="https://i.pinimg.com/564x/d7/f6/05/d7f605fc213fe926e81695ebb7a1b74c.jpg"
                alt="bannerImg_slide1"
              />
              <img
                src="https://i.pinimg.com/564x/35/10/69/351069189b0a6f17379d0b46d76e7497.jpg"
                alt="bannerImg_slide1"
              />
              <img
                src="https://i.pinimg.com/564x/f9/f0/b3/f9f0b3bdb3b60debc880e4f1959b0dd0.jpg"
                alt="bannerImg_slide1"
              />
              <img
                src="https://i.pinimg.com/564x/9a/c8/e3/9ac8e3ec369cd235f7ebc9f84a7bade6.jpg"
                alt="bannerImg_slide1"
              />
              <img
                src="https://i.pinimg.com/564x/7f/92/e0/7f92e0e7a27934a254720ccb5d561f05.jpg"
                alt="bannerImg_slide1"
              />
            </NewPaintings>
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
  background-color: beige;
  height: 500px;
`;

const FirstSlide = styled("div")`
  display: flex;
  z-index: 1;

  div {
    position: relative;
    width: 50%;
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

const NewPaintings = styled("div")`
  position: absolute;
  min-width: 750px;
  top: -3em;
  right: -8em;
  transform: rotate(-15deg);


  img {
    margin: 0.5em;
    width: 200px;
    height: 200px;
    border: 2px solid black;
    border-radius: 1em;
  }
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
