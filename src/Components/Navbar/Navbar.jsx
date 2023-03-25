import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import {
  Header,
  SiteTitle,
  Navigation,
  Cart,
  BadgeContainer,
  MenuIcon,
} from "./NavbarStyle";
import { Person, AccountCircle, Menu, Close } from "@mui/icons-material";
import { SucciContext } from "../../Constants/SucciContext";

const Navbar = () => {
  // Mode 1: Desktop; Mode 2: Tablet / Mobile
  const { cartItems, isConnected } = useContext(SucciContext);

  const [navMode, setNavMode] = useState(1);
  const [icon, setIcon] = useState(false);

  const changeIcon = () => {
    setIcon(!icon);
  };

  const closeMenu = () => {
    setIcon(false);
  };

  const changeMode = () => {
    if (window.innerWidth <= 768) {
      setNavMode(2);
    } else {
      setNavMode(1);
    }
  };

  useEffect(() => {
    changeMode();
  }, []);

  window.addEventListener("resize", changeMode);

  return (
    <Header>
      <div>
        <Link to="/">
          <SiteTitle>The Succi Place</SiteTitle>
        </Link>
      </div>
      <Navigation
        role="navigation"
        className={
          navMode === 2 ? (icon ? "mobileMode active" : "mobileMode") : null
        }
      >
        {navMode === 2 && (
          <MenuIcon onClick={changeIcon}>{icon ? <Close /> : null}</MenuIcon>
        )}
        <li>
          <Link to="/about" onClick={closeMenu}>
            À propos
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={closeMenu}>
            Tableaux
          </Link>
        </li>
        <Cart aria-label="cart">
          <Link to="/cart" onClick={closeMenu}>
            Panier
          </Link>
          {cartItems.length !== 0 && (
            <BadgeContainer>
              <Badge
                badgeContent={cartItems.length}
                sx={{ color: "white" }}
              ></Badge>
            </BadgeContainer>
          )}
        </Cart>
        <li>
          {isConnected ? (
            <Link to="/userDashboard" onClick={closeMenu}>
              <AccountCircle />
            </Link>
          ) : (
            <Link to="/signInUp" onClick={closeMenu}>
              <Person />
            </Link>
          )}
        </li>
      </Navigation>
      {navMode === 2 && (
        <MenuIcon onClick={changeIcon}>{icon ? null : <Menu />}</MenuIcon>
      )}
    </Header>
  );
};

export default Navbar;
