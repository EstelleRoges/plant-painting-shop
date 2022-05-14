import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import "./Layout.scss";

function Layout(props) {
  const itemsCurrentlyInCart = props;
  return (
    <>
      <Navbar itemsCurrentlyInCart={itemsCurrentlyInCart}/>
      <div className="container"><Outlet /></div>
    </>
  );
}

export default Layout;
