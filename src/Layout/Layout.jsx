import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <LayoutSpace>
      <Navbar count={props.count} isConnected = {props.isConnected}/>
      <Container>
        <Content>
          <Outlet />
        </Content>
      </Container>
      <Footer />
    </LayoutSpace>
  );
}

const LayoutSpace = styled("div")`
  Button, button {
  background-color: #73AE5B;
  color: white;

  &:hover {
      background-color: #8ABC76;
    }
}
`;

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
