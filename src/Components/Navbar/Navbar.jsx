import React,  { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { Header } from "./NavbarStyle";
import {
  Person,
  ShoppingBasket,
  AccountCircle,
  Menu,
  Close,
} from "@mui/icons-material";
import { SucciContext } from "../../Constants/SucciContext";

const Navbar = () => {
  // Mode 1: Desktop; Mode 2: Tablet; Mode 3: Mobile
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
    if (window.innerWidth <= 576) {
      setNavMode(3);
    } else if (window.innerWidth <= 992) {
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
    <Header
      className={
        navMode !== 1 ? (icon ? "mobileMenu active" : "mobileMenu") : null
      }
    >
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/products" onClick={closeMenu}>
                Tableaux
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                À propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Link to="/">
          <h1>The Succi Place</h1>
        </Link>
      </div>
      <div>
        <ul className={icon ? "resIcons active" : "resIcons"}>
            <li aria-label="cart">
              <Link to="/cart" onClick={closeMenu}>
                <Badge badgeContent={cartItems.length} color="success">
                  <ShoppingBasket id="cartIcon" />
                </Badge>
              </Link>
            </li>
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
          {navMode !== 1 ? (
            <li onClick={changeIcon}>{icon ? <Close /> : <Menu />}</li>
          ) : null}
        </ul>
      </div>
    </Header>
  );
};

export default Navbar;
