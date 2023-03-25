import { styled } from "@mui/material";

export const BannerArea = styled("div")`
  margin: 3em 0 10em 0;
  height: 500px;
  background-color: white;
  background-image: url(https://i.pinimg.com/564x/1e/98/86/1e988620b6332bb0dbf5bc26e274024b.jpg);
  background-repeat: no-repeat;
  background-position: right 0 bottom 27%;
  box-shadow: 0 0 2em 2em inset #f8f8f8;

  @media screen and (max-width: 992px) {
  background-size: 70% auto;
  }

  @media screen and (max-width: 578px) {
  background-size: 300px 430px;
  }
`;

export const TextSection = styled("article")`
  padding-top: 3em;
  width: 60%;

  h2 {
    font-size: clamp(38px, 4.5vw, 50px);
    border-bottom: none;
  }

  button {
    margin-left: 1.5em;
    float: none;
    background-color: var(--green-secondary);

    &:hover {
      background-color: var(--green-light);
    }
  }
  a {
    color: white;
  }

   @media screen and (max-width: 768) {
    h2 {
      text-align: left;
    }
  }
   @media screen and (max-width: 578px) {
    padding-top: 1em;
    width: 100%;
  }
`;