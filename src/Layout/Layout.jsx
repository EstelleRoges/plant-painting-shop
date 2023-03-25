import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <LayoutSpace>
        <Navbar />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </LayoutSpace>
    </>
  );
}

const LayoutSpace = styled("main")`
  display: flex;
  flex-direction: column;

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
  width: 80%;
  max-width: 1400px;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 577px) {
    text-align: justify;
  }
`;

export default Layout;
