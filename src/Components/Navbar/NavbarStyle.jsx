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
        position: absolute;
        top: 0;
        right: 0;
        transform: translateY(0);
        z-index: -1;
        transition: 0.3 ease-out;
        
        ul {
          margin-top: 2.5em;
          display: block;
        }
      }

      &:nth-of-type(2) {
        justify-content: flex-start;
      }
    }

    &.active {
      div:first-of-type {
        margin: auto;
        width: 200px;
        justify-content: center;
        background: linear-gradient(to bottom, transparent 35%, #7db569 40%);
        text-align: center;
        border-radius: 0 0 0 1em;
        transform: translateY(50px);
        visibility: visible;
        z-index: 1;
        transition: 0.3 ease-out;

        ul {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    h1 {
      font-size: 36px;
    }

    div {
       &:nth-of-type(2) {
        flex: 6;
      }
       &:nth-of-type(3) {
        flex: 6;
      }
    }
  }
`;
