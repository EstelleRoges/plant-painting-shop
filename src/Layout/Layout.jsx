import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <>
      <Container>
        <Navbar count={props.count} isConnected = {props.isConnected}/>
        <Content>
          <Outlet />
        </Content>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled("div")`
margin: auto;
 width: 80%;
`;

const Content = styled("div")`
  margin: 2em auto;
  max-width: 1500px;
  border-radius: 2em;
`;

export default Layout;
