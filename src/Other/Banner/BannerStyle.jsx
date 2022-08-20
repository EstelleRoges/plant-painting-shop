import { styled } from "@mui/material";

export const BannerArea = styled("div")`
  margin-top: 3em;
  height: 500px;
`;

export const FirstSlide = styled("div")`
  height: 500px;
  background-image: url("imgs/paintingShop.bannerSlide1.jpg");
  background-repeat: no-repeat;
  background-position: right;
  display: flex;


  div {
    margin-left: 1em;
    position: relative;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-family: "Whisper", cursive, serif;
      font-weight: bold;
      margin: 1em 0 0.5em 0;
      font-size: 55px;
      color: #335228;
      text-shadow: 2px 2px 2px #7db569;
    }

    Button {
      float: left;
      font-size: 18px;
    }

    a {
      color: white;
    }
  }

  @media screen and (max-width: 715px) {
    div {
      width: 100%;
    }
  }
`;

export const SecondSlide = styled("div")`
  height: 500px;
  background-image: url("imgs/paintingShop_bannerSlide2.jpg");
  background-position: center;
  background-size: fill;
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
