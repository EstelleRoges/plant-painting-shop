import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <>
    <LayoutSpace>
      <Navbar count={props.count} isConnected = {props.isConnected}/>
        <Content >
          <Outlet />
        </Content>
      <Footer />
    </LayoutSpace>
    </>
  );
}

const LayoutSpace = styled("div")`
display: flex;
flex-direction: column;

  Button, button {
  background-color: #73AE5B;
  color: white;

  &:hover {
      background-color: #8ABC76;
    }
}
`;

const Content = styled("div")`
  margin: 2em auto;
  max-width: 1500px;
  height: 100%;
  width: 80%;
`;

export default Layout;
