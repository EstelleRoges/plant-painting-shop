import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { Search, Person, ShoppingBasket } from "@mui/icons-material";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/products">Paintings</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <h1>- The Succi Place -</h1>
      <ul>
        <li onClick={() => handleClick()}>
          {click ? <SearchBar /> : <Search />}
        </li>
        <li>
          <Link to="/cart">
            <ShoppingBasket />
          </Link>
        </li>
        <li>
          <Link to="/signInUp">
            <Person />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
