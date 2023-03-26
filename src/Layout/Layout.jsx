import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function Layout() {
  const [buttonVisible, isButtonVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        isButtonVisible(true);
      } else {
        isButtonVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <LayoutSpace>
        <Navbar />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </LayoutSpace>
      <Topper
        onClick={scrollToTop}
        style={{ display: buttonVisible ? "block" : "none" }}
      >
        <KeyboardDoubleArrowUpIcon />
      </Topper>
    </>
  );
}

const LayoutSpace = styled("main")`
  display: flex;
  flex-direction: column;
  position: relative;

  Button,
  button {
    background-color: var(--brown-secondary);
    color: white;

    &:hover {
      background-color: var(--brown-tertiary);
    }
  }
`;

const Content = styled("div")`
  margin: auto;
  width: 95%;
  max-width: 1400px;
  height: 100%;

  @media screen and (max-width: 577px) {
    text-align: justify;
  }
`;

const Topper = styled("button")`
  padding: 0.25em 0.5em;
  background-color: var(--green-tertiary);
  border-radius: 2em;
  position: fixed;
  right: 2em;
  bottom: 2em;
  z-index: 4;

  &:hover {
    opacity: 0.8;
  }

  svg {
    color: var(--ivory);
  }
`;

export default Layout;
