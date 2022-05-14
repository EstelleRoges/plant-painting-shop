import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import "./Layout.scss";

function Layout(props) {
  return (
    <>
      <Navbar count = {props.count}/>
      <div className="container"><Outlet /></div>
    </>
  );
}

export default Layout;
