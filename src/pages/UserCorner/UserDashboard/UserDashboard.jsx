import {
  TabList,
  TabGroup,
  UserTab,
  RowDiv,
  InfoDiv,
  SubInfoDiv,
  SubInfo,
  CardInfos,
} from "./UserDashboardStyle.jsx";
import { useState } from "react";
import { Avatar, Box } from "@mui/material";
import { Construction } from "@mui/icons-material";
import PropTypes from "prop-types";

const UserDashboard = () => {
  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ width: "100%", pl: 2 }}>
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
      <Box sx={{ width: "100%", display: "flex" }}>
        <TabList
          className="tabStyle"
          orientation="vertical"
          onChange={handleChange}
          value={value}
          aria-label={"userDashboardMenu"}
        >
          <UserTab label="Informations" />
          <UserTab label="Commandes" />
        </TabList>

        <TabGroup>
          <TabPanel value={value} index={0}>
            <InfoDiv>
              <RowDiv>
                <Avatar alt="userAvatar" sx={{ width: 50, height: 50 }} />
                <div style={{ marginLeft: "3em" }}>
                  <h2>Le Testeur</h2>
                  <p>a.k.a: Le Testeur</p>
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
                <RowDiv>
                  <div style={{ width: "25%" }}>
                    <label htmlFor="streetNumber">N°</label>
                    <input
                      readOnly
                      type="text"
                      name="streetNumber"
                      id="streetNumber"
                      value={"12"}
                    />
                  </div>
                  <div style={{ width: "75%" }}>
                    <label htmlFor="streetType">Type de voie</label>
                    <select name="streetType" id="streetType">
                      <option value="streetType">Rue</option>
                      <option value="streetType">Avenue</option>
                      <option value="streetType">Allée</option>
                      <option value="streetType">Ruelle</option>
                      <option value="streetType">Boulevard</option>
                      <option value="streetType">Chemin</option>
                      <option value="streetType">Route</option>
                    </select>
                  </div>
                </RowDiv>
                <RowDiv>
                  <div style={{ width: "100%" }}>
                    <label htmlFor="userName">Nom de voie</label>
                    <input
                      readOnly
                      type="text"
                      name="city"
                      id="city"
                      value={"du Frontend"}
                    />
                  </div>
                </RowDiv>
                <RowDiv>
                  <div>
                    <label htmlFor="postalCode">Code postal</label>
                    <input
                      readOnly
                      type="text"
                      name="postalCode"
                      id="postalCode"
                      value={"99999"}
                    />
                  </div>
                  <div>
                    <label htmlFor="city">Ville</label>
                    <input
                      readOnly
                      type="text"
                      name="city"
                      id="city"
                      value={"LaVille"}
                    />
                  </div>
                </RowDiv>
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
          </TabPanel>

          <TabPanel value={value} index={1}>
            <InfoDiv>
              En construction <Construction />
            </InfoDiv>
          </TabPanel>
        </TabGroup>
      </Box>
    </>
  );
};

export default UserDashboard;
