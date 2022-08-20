import { styled } from "@mui/material";

export const Header = styled("header")`
  background: linear-gradient(
    to bottom,
    #add09f 28%,
    #7db569 92%,
    rgba(255, 255, 255, 0) 100%
  );
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: fit-content;
    display: flex;

    &:first-of-type {
      flex: 3;
      justify-content: flex-start;
    }
    &:nth-of-type(2) {
      flex: 6;
      justify-content: center;
    }
    &:last-of-type {
      flex: 3;
      justify-content: flex-end;
      #cartIcon {
        padding-bottom: 10px;
      }
    }
  }

  .resIcons {
    display: flex;
  }

  svg {
    width: 26px;
    height: 26px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    font-style: italic;
    font-size: 16px;
    color: #335228;
  }

  h1 {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 60px;
    font-style: normal;
    color: #335228;
    text-shadow: 0 0 1px #335228;
    border: none;
    text-align: center;
  }

  ul {
    width: fit-content;
    display: flex;
    list-style: none;
    padding: 0 0.5em;

    li {
      padding: 0 1.2em;
    }
  }

  @media screen and (max-width: 992px) {
    position: relative;

    h1 {
      font-size: 46px;
    }

    a {
      font-size: 15px;
    }

    svg {
      width: 22px;
      height: 22px;
    }

    div {
      &:first-of-type {
        height: 100px;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
      }

      &:nth-of-type(2) {
        justify-content: flex-start;
      }
    }

    &.active {
      nav {
        height: 70px;
      }

      div:first-of-type {
        margin: auto;
        top: 4em;
        right: 0;
        width: 100%;
        height: fit-content;
        justify-content: flex-end;
        background: linear-gradient(to bottom, transparent 0%, #7db569 30%);
        text-align: center;
        border-radius: 0 0 1em 1em;
        visibility: visible;
        z-index: 1;
        transition: 0.3 ease-out;

        ul {
          padding: 0;

          li {
            padding: 0.5em 1.5em;
          }
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    h1 {
      font-size: 7vw;
    }

    div {
      &:nth-of-type(2) {
        flex: 8;
      }
      &:nth-of-type(3) {
        flex: 4;
      }
    }

    .resIcons {
      width: fit-content;
      position: absolute;
      top: 0;
      left: 2vw;
      z-index: -1;

      &.active {
        z-index: 1;
        top: 10vh;

        li {
          padding: 0 2vh;
        }
      }
    }

    &.active {
      div:first-of-type {
        width: 100%;
        top: 7vh;
        border-radius: 0 0 1em 1em;
        visibility: visible;
        z-index: 1;
        justify-content: flex-end;

        ul {
        padding: 0.5vh 2vw 0 0;
          width: fit-content;

          li {
            padding: 0.3em 1vh;
          }
        }
      }
    }
  }
`;
