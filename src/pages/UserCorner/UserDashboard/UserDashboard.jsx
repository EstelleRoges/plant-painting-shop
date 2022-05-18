import "./UserDashboard.scss";
import { useState } from "react";
import { Box, Tab, Tabs, Typography, TextField, styled } from "@mui/material";
import PropTypes from "prop-types";

const UserDashboard = (props) => {
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
          <Box sx={{ p: 3 }}>
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
    <div>
      <h1>Votre tableau de bord</h1>
      <Box sx={{ display: "flex" }}>
        <Tabs orientation="vertical" onChange={handleChange} value={value}>
          <Tab label="Informations" />
          <Tab label="Payments" />
          <Tab label="Orders history" />
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
                <input type="text" name="" id="" />
              </div>
              <div>
                <label htmlFor="firstName">Prénom</label>
                <input type="text" name="" id="" />
              </div>
            </RowDiv>
            <RowDiv>
              <div>
                <label htmlFor="streetNumber">N°</label>
                <input type="text" name="streetNumber" id="streetNumber" />
              </div>
              <div>
                <label htmlFor="userName">Type de voie</label>
                <select name="streetType" id="subject">
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
                <input type="text" name="" id="" />
              </div>
            </RowDiv>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          Tab content
        </TabPanel>

        <TabPanel value={value} index={2}>
          Tab content
        </TabPanel>
      </Box>
    </div>
  );
};

const RowDiv = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #ccc;

  div {
    margin-bottom: 2em;
  }
`;


export default UserDashboard;
