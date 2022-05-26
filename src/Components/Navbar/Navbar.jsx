import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { Header, SiteLinks, UserCorner } from "./NavbarStyle";
import { Person, ShoppingBasket, AccountCircle } from "@mui/icons-material";

const Navbar = (props) => {
  return (
    <Header>
      <nav>
        <SiteLinks>
          <li>
            <Link to="/products">Tableaux</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </SiteLinks>
      </nav>
      <Link to="/">
        <h1>- The Succi Place -</h1>
      </Link>
      <UserCorner>
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
      </UserCorner>
    </Header>
  );
};

export default Navbar;
