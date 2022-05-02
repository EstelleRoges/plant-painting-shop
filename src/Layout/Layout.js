import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import "./Layout.scss";

function Layout() {
  return (
    <>
      
      <div className="container">
      <Navbar />
      <Outlet /></div>
    </>
  );
}

export default Layout;
