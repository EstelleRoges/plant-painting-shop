import "./Navbar.scss";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { Person, ShoppingBasket, MoreVert } from "@mui/icons-material";

const Navbar = (numberOfItems = 0) => {
  const count = 0;
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
      <Link to="/">
        <h1>- The Succi Place -</h1>
      </Link>
      <ul>
        <li>
          <Link to="/cart">
            <Badge badgeContent={count} color="success">
              <ShoppingBasket />
            </Badge>
          </Link>
        </li>
        <li>
          <Link to="/signInUp">
            <Person />
          </Link>
        </li>
        <li><MoreVert /></li>
      </ul>
    </header>
  );
};

export default Navbar;
