import "./Navbar.scss";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { Person, ShoppingBasket, MoreVert } from "@mui/icons-material";

const Navbar = (props) => {
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
            <Badge badgeContent={props.count} color="success">
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
