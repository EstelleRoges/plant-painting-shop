import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { Header } from "./NavbarStyle";
import { Person, ShoppingBasket, AccountCircle } from "@mui/icons-material";

const Navbar = (props) => {
  return (
    <Header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/products">Tableaux</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
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
        </ul>
      </div>
    </Header>
  );
};

export default Navbar;
