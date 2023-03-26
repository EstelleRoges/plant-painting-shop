import { styled } from "@mui/material";

export const Card = styled("div")`
  width: 280px;
  height: 280px;
  margin: 1em;
  border-radius: 6em 6em 3em 3em;
  box-shadow: 0 1px 5px var(--green-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: white;
  transition: 0.3s ease-out;

  .hovered {
    opacity: 1;
    background-image: linear-gradient(
      to bottom,
      transparent 50%,
      var(--green-light) 80%
    );
  }

  @media screen and (max-width: 840px) {
    width: 250px;
    height: 250px;
  }
  
  @media screen and (max-width: 685px) {
    width: 230px;
    height: 230px;
  }
`;

export const CardInfos = styled("div")`
  width: 280px;
  height: 280px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  border-radius: 6em 6em 3em 3em;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease-out;
  z-index: 2;
  opacity: 0;

  @media screen and (max-width: 840px) {
    width: 250px;
    height: 250px;
    opacity: 1;
    background-image: linear-gradient(
      to bottom,
      transparent 50%,
      var(--green-light) 80%
    );
  }

  @media screen and (max-width: 685px) {
    width: 230px;
    height: 230px;
  }
`;

export const CardText = styled("div")`
  margin: 0 auto 1em auto;

  p {
    margin: 0.25em 0;
    font-size: 24px;
    color: var(--brown-primary);
    font-weight: 700;
  }

  span {
    font-size: 18px;
    margin: 10px 0 0 0;
    text-decoration: none;
  }
`;

export const ImgContent = styled("div")`
  img {
    width: 280px;
    height: 280px;
    border-radius: 6em 6em 3em 3em;
    ${"" /* box-shadow: 0 6px 10px var(--green-secondary); */}
    background-color: white;
    object-fit: contain;
    ${
      "" /* position: absolute;
    top: -6em;
    left: 0;
    right: 0; */
    }
    z-index: 2;
  }

  @media screen and (max-width: 840px) {
    img {
      width: 250px;
      height: 250px;
    }
  }

  @media screen and (max-width: 685px) {
    img {
      width: 230px;
      height: 230px;
    }
  }
`;
