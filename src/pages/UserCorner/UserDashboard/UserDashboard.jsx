import "./UserDashboard.scss";
import { useState } from "react";
import { Box, Tab, Tabs, styled } from "@mui/material";
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
      <div>
        <Box sx={{ display: "flex" }}>
          <Tabs orientation="vertical" onChange={handleChange} value={value}>
            <Tab label="Informations" />
            <Tab label="Payments" />
            <Tab label="Orders history" disabled />
          </Tabs>

          <TabPanel value={value} index={0}>
            <RowDiv>
              <div>
                <label htmlFor="userName">Pseudo</label>
                <input type="text" name="userName" id="userName" />
              </div>
              <div>
                <label htmlFor="userName">Mot de passe</label>
                <input type="password" name="password" id="password" />
              </div>
            </RowDiv>
            <div>
              <RowDiv>
                <div>
                  <label htmlFor="lastName">Nom</label>
                  <input type="text" name="lastName" id="lastName" />
                </div>
                <div>
                  <label htmlFor="firstName">Prénom</label>
                  <input type="text" name="firstName" id="firstName" />
                </div>
              </RowDiv>
              <RowDiv>
                <div style={{ width: "75px" }}>
                  <label htmlFor="streetNumber">N°</label>
                  <input type="text" name="streetNumber" id="streetNumber" />
                </div>
                <div>
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
                <div>
                  <label htmlFor="userName">Ville</label>
                  <input type="text" name="city" id="city" />
                </div>
              </RowDiv>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <h2>Credit Card</h2>
            <CardArea>
              <div>
              <label htmlFor="cardNumber">Numéro de carte</label>
              <input type="text" name="cardNumber" id="cardNumber" />
            </div>
            <CardInfos>
              <div>
                <label htmlFor="cardExpiration">Date d'expiration</label>
                <input type="date" name="cardExpiration" id="cardExpiration" />
              </div>
              <div>
                <label htmlFor="cryptogram">Cryptogramme</label>
                <input type="text" name="cryptogram" id="cryptogram" />
              </div>
            </CardInfos>
            <div>
              <h2>Paypal</h2>
              <input type="text" name="paypalAccoount" id="paypalAccoount" />
            </div>
            </CardArea>
            
          </TabPanel>

          <TabPanel value={value} index={2}>
            Orders history
          </TabPanel>
        </Box>
      </div>
    </>
  );
};

const RowDiv = styled("div")`
  margin-left: 3em;
  box-sizing: border-box;
  display: flex;
  justify-items: center;
  align-items: baseline;

  div {
    margin: 0 1em;
  }

  label {
    display: block;
  }

  select {
    width: 120px;
  }
`;

const CardArea = styled("div")`
  margin-left: 3em;
  width: 350px;
`;

const CardInfos = styled("div")`
  display: flex;
  justify-content: space-between;

  div:first-of-type {
    margin-right: 1em;
  }
`;

export default UserDashboard;
