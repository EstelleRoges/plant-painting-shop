import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { Header } from "./NavbarStyle";
import {
  Person,
  ShoppingBasket,
  MoreVert,
  AccountCircle,
} from "@mui/icons-material";

const Navbar = (props) => {
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <Link to="/products">Tableaux</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
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
        <li>
          <MoreVert />
        </li>
      </ul>
    </Header>
  );
};

export default Navbar;
