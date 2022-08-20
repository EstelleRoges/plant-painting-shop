import {
  UserBox,
  TabList,
  TabGroup,
  UserTab,
  RowDiv,
  InfoDiv,
  SubInfoDiv,
  SubInfo,
  CardInfos,
  DecoImg,
  OptionBtns,
} from "./UserDashboardStyle.jsx";
import { useState } from "react";
import { Avatar, Box, Button } from "@mui/material";
import { Construction, Edit, Logout } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ShippingAdress from "../../../Components/ShippingAdress/ShippingAdress.jsx";

const UserDashboard = (props) => {
  const navigate = useNavigate();

  const userLogsOut = () => {
    props.setIsConnected(!props.isConnected);
    navigate("/signInUp");
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ width: "100%" }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  };

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h1>Mon compte</h1>
        <TabList 
          className="tabStyle"
          orientation="horizontal"
          onChange={handleChange}
          value={value}
          aria-label={"userDashboardMenu"}
        >
          <UserTab label="Informations" />
          <UserTab label="Commandes" />
        </TabList>

      <UserBox>
        <TabGroup>
          <TabPanel value={value} index={0}>
            <InfoDiv>
              <RowDiv sx={{ position: "relative" }}>
                <Avatar alt="userAvatar" sx={{ width: 50, height: 50 }} />
                <div>
                  <h2>Le Testeur</h2>
                  <p>a.k.a: Le Testeur</p>
                  <DecoImg
                    src="imgs/succulents-top-view-hand-drawn-style-vector.jpg"
                    alt="userMainInfoDeco"
                  />
                </div>
              </RowDiv>
            </InfoDiv>

            <InfoDiv>
              <SubInfoDiv>
                <h2>Informations</h2>
                <SubInfo>
                  <div>
                    <label htmlFor="pseudo">Pseudo</label>
                    <input
                      readOnly
                      type="text"
                      name="pseudo"
                      id="pseudo"
                      value={"Le Testeur"}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName">Nom</label>
                    <input
                      readOnly
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={"Le"}
                    />
                  </div>
                  <div>
                    <label htmlFor="firstName">Prénom</label>
                    <input
                      readOnly
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={"Testeur"}
                    />
                  </div>
                </SubInfo>
              </SubInfoDiv>

              <SubInfoDiv>
                <h2>Adresse</h2>
                <SubInfo>
                  <ShippingAdress />
                </SubInfo>
              </SubInfoDiv>
            </InfoDiv>

            <InfoDiv>
              <SubInfoDiv>
                <h2>Carte Bleue</h2>
                <SubInfo>
                  <div>
                    <label htmlFor="cardNumber">Numéro de carte</label>
                    <input
                      readOnly
                      type="text"
                      name="cardNumber"
                      id="cardNumber"
                      value={"0000 0000 0000 0000"}
                    />
                  </div>
                  <CardInfos>
                    <div>
                      <label htmlFor="cardExpiration">Date d'expiration</label>
                      <input
                        type="date"
                        name="cardExpiration"
                        id="cardExpiration"
                      />
                    </div>
                    <div>
                      <label htmlFor="cryptogram">Cryptogramme</label>
                      <input
                        readOnly
                        type="text"
                        name="cryptogram"
                        id="cryptogram"
                        value={"000"}
                      />
                    </div>
                  </CardInfos>
                </SubInfo>
              </SubInfoDiv>
              <SubInfoDiv>
                <h2>Paypal</h2>
                <SubInfo>
                  <label htmlFor="paypalAccount">N° de compte</label>
                  <input
                    readOnly
                    type="text"
                    name="paypalAccoount"
                    id="paypalAccoount"
                    value={"000000000000"}
                  />
                </SubInfo>
              </SubInfoDiv>
            </InfoDiv>

            <InfoDiv>
              <RowDiv
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <h2>Options</h2>
                <OptionBtns>
                  <Button
                    variant="contained"
                    endIcon={<Logout />}
                    onClick={userLogsOut}
                  >
                    Déconnexion
                  </Button>
                  <Button
                    sx={{ margin: "0 1em" }}
                    variant="contained"
                    endIcon={<Edit />}
                  >
                    Modifier
                  </Button>
                </OptionBtns>
              </RowDiv>
            </InfoDiv>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <InfoDiv>
              En construction <Construction />
            </InfoDiv>
          </TabPanel>
        </TabGroup>
      </UserBox>
    </>
  );
};

export default UserDashboard;
