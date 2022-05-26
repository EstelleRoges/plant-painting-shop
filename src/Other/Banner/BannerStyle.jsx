import {styled} from "@mui/material";

export const BannerArea = styled("div")`
  background-image: linear-gradient(to right, #D9EAD3, white);
  height: 500px;
`;

export const FirstSlide = styled("div")`
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

    a {
      color: white;
    }
    
  }
`;

export const Image = styled("img")`
  width: 200px;
  height: 200px;
  background-color: white;
  object-fit: contain;
  border: 2px solid #C3D2BD;
  border-radius: 1em;
  z-index: -1;
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
