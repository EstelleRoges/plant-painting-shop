import React from "react";
import { RowDiv } from "../../pages/UserCorner/UserDashboard/UserDashboardStyle";

const ShippingAdress = () => {
  return (
    <>
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
        <div style={{ width: "50%" }}>
          <label htmlFor="postalCode">Code postal</label>
          <input
            readOnly
            type="text"
            name="postalCode"
            id="postalCode"
            value={"99999"}
          />
        </div>
        <div style={{ width: "50%" }}>
          <label htmlFor="city">Ville</label>
          <input readOnly type="text" name="city" id="city" value={"LaVille"} />
        </div>
      </RowDiv>
    </>
  );
};

export default ShippingAdress;
