import { styled } from "@mui/material";

export const Header = styled("header")`
  background: linear-gradient(
    to bottom,
    var(--green-secondary) 5%,
    rgba(255, 255, 255, 0) 30%
  );
  padding: 1em;
  padding-top: 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    vertical-align: middle;
    &:last-of-type {
      font-size: 26px;
    }
  }

  li {
    cursor: pointer;
  }

  .mobileMode {
    width: 175px;
    height: 100vh;
    margin: 0;
    padding: 2em 0.75em 0 3em;
    background-image: linear-gradient(to right, transparent 0%, var(--green-light) 45%);
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(100%);
    transition: all 0.3s ease-out;
    z-index: 3;

    li {
      padding: 1em 0.75em;
      color: var(--text-color);
    }

    &.active {
      transform: translateX(0);
    }
  }
`;

export const SiteTitle = styled("h1")`
  width: 100%;
  margin: 0;
  padding: 0;
  font-style: normal;

  text-shadow: 0 0 1px var(--green-primary);
  border-bottom: none;
`;

export const Navigation = styled("ul")`
  width: fit-content;
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;

  li {
    padding: 0 1.2em;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const Cart = styled("li")`
  position: relative;
`;

export const BadgeContainer = styled("span")`
  margin-left: 1px;
  position: absolute;
  top: -10px;
  width: 20px;
  height: 20px;
  border-radius: 1em;
  background-color: var(--green-light);

  span {
    padding-left: 8px;
    padding-bottom: 2px;
  }
`;

export const MenuIcon = styled("span")`
  cursor: pointer;
`;

// div {
//     width: fit-content;
//     display: flex;

//     &:first-of-type {
//       flex: 3;
//       justify-content: flex-start;
//     }
//     &:nth-of-type(2) {
//       flex: 6;
//       justify-content: center;
//     }
//     &:last-of-type {
//       flex: 3;
//       justify-content: flex-end;
//       #cartIcon {
//         padding-bottom: 10px;
//       }
//     }
//   }

//   .resIcons {
//     display: flex;
//   }

//   svg {
//     width: 26px;
//     height: 26px;
//     cursor: pointer;
//   }

//   a {
//     font-weight: 700;
//     font-style: italic;
//   }

//   h1 {
//     width: 100%;
//     margin: 0;
//     padding: 0;
//     font-style: normal;

//     text-shadow: 0 0 1px var(--green-primary);
//     border: none;
//     text-align: center;
//   }

//   ul {
//     width: fit-content;
//     display: flex;
//     list-style: none;
//     padding: 0 0.5em;

//     li {
//       padding: 0 1.2em;
//     }
//   }

//   @media screen and (max-width: 992px) {
//     position: relative;

//     a {
//       font-size: 15px;
//     }

//     svg {
//       width: 22px;
//       height: 22px;
//     }

//     div {
//       &:first-of-type {
//         height: 100px;
//         position: absolute;
//         top: 0;
//         right: 0;
//         z-index: -1;
//         visibility: hidden;
//       }

//       &:nth-of-type(2) {
//         justify-content: flex-start;
//       }
//     }

//     &.active {
//       nav {
//         height: 70px;
//       }

//       div:first-of-type {
//         margin: auto;
//         top: 4em;
//         right: 0;
//         width: 100%;
//         height: fit-content;
//         justify-content: flex-start;
//         ${'' /* background: linear-gradient(to bottom, transparent 0%, var(--green-secondary) 30%); */}
//         border-radius: 0 0 1em 1em;
//         visibility: visible;
//         z-index: 1;
//         transition: 0.3 ease-out;

//         ul {
//           padding: 0;

//           li {
//             padding: 0.5em 1.5em;
//           }
//         }
//       }
//     }
//   }

//   @media screen and (max-width: 576px) {
//     div {
//       &:nth-of-type(2) {
//         flex: 8;
//       }
//       &:nth-of-type(3) {
//         flex: 4;
//       }
//     }

//     .resIcons {
//       width: fit-content;
//       position: absolute;
//       top: 4em;
//       left: 2vw;
//       z-index: -1;

//       &.active {
//         z-index: 1;
//         top: 10vh;

//         li {
//           padding: 0 2vh;
//         }
//       }
//     }

//     &.active {
//       div:first-of-type {
//         width: 100%;
//         top: 7vh;
//         border-radius: 0 0 1em 1em;
//         visibility: visible;
//         z-index: 1;
//         justify-content: flex-end;

//         ul {
//           padding: 0.5vh 2vw 0 0;
//           width: fit-content;

//           li {
//             padding: 0.3em 1vh;
//           }
//         }
//       }
//     }
//   }
