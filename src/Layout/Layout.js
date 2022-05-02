import { Link, Outlet } from "react-router-dom";
import "./Layout.scss";

function Layout() {
  return (
    <>
    
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Paintings</Link>
            </li>
            <li>
              <Link to="/">Plants</Link>
            </li>
          </ul>
        </nav>
        <h1>- The Succi Place -</h1>
        <ul>
            {/* <li><form method="GET">
                <input type="text" placeholder="Search" />
            </form></li> */}
            <li>Search</li>
            <li><Link to="/">Cart</Link></li>
            <li><Link to="/">Profile</Link></li>
        </ul>
      </header>
      <div className="container"><Outlet /></div>
    </>
  );
}

export default Layout;
