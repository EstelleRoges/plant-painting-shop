import { styled } from "@mui/material";

export const AboutContainer = styled("section")`
  h2 {
    font-size: clamp(40px, 4.5vh, 44px);
  }
`;

export const AboutSection = styled("article")`
  margin: 5em 0.5em;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  box-sizing: border-box;

  div {
    width: 50%;
  }

  .aboutImg {
    display: flex;
    justify-content: center;

    img {
      margin: auto;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  p {
    margin: auto;
    padding: 1.5em;
    text-align: justify;
  }

  @media screen and (max-width: 992px) {
    .aboutText {
      width: 55%;
    }
    .aboutImg {
      width: 40%;

      img {
        padding: 1em;
        width: 300px;
        height: 300px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .aboutText,
    .aboutImg {
      width: fit-content;
    }
  }

  @media screen and (max-width: 576px) {
    margin-top: 4em;
    p {
      padding: 1.5em 0;
    }

    .aboutImg img {
      width: 250px;
      height: 250px;
    }
  }
`;
