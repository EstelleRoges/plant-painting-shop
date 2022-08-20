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
import { useState, useEffect } from "react";

const Navbar = (props) => {
  const [navMode, setNavMode] = useState(false);
  const [icon, setIcon] = useState(false);

  const changeIcon = () => {
    setIcon(!icon);
  };

  const closeMenu = () => {
    setIcon(false);
  };

  const changeMode = () => {
    window.innerWidth >= 992 ? setNavMode(true) : setNavMode(false);
  };

  useEffect(() => {
    changeMode();
  }, []);

  window.addEventListener("resize", changeMode);

  return (
    <Header className={!navMode ? (icon ? "mobileMenu active" : "mobileMenu") : null}>
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
          <h1>- The Succi Place -</h1>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/cart">
              <Badge badgeContent={props.count} color="success">
                <ShoppingBasket id="cartIcon" />
              </Badge>
            </Link>
          </li>
          <li>
            {props.isConnected ? (
              <Link to="/userDashboard">
                <AccountCircle />
              </Link>
            ) : (
              <Link to="/signInUp">
                <Person />
              </Link>
            )}
          </li>
          {!navMode ? (
            <li onClick={changeIcon}>{icon ? <Close /> : <Menu />}</li>
          ) : null}
        </ul>
      </div>
    </Header>
  );
};

export default Navbar;
