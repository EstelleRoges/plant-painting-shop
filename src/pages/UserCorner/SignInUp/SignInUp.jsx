import React from "react";
import { Link } from "react-router-dom";
import "./SignInUp.scss";

const signInUp = () => {
  return (
    <div className="signInUpContent">
      <div className="signInArea">
        <h2>Connexion</h2>
        <div className="form">
          <form>
            <label htmlFor="signInMail">Mail</label>
            <input type="email" name="signInMail" id="signInMail" />
            <label htmlFor="signInPassword">Mot de passe</label>
            <input type="password" name="signInPassword" id="signInPassword" />
            <button type="submit"> <Link to="/userDashboard">Connexion</Link></button>
          </form>
        </div>
      </div>
      <hr />
      <div className="signUpArea">
        <h2>Inscription</h2>
        <div className="form">
          <form>
            <label htmlFor="signUpMail">Mail</label>
            <input type="email" name="signUpMail" id="signUpMail" />
            <label htmlFor="signUpPassword">Mot de passe</label>
            <input type="password" name="signInPassword" id="signUpPassword" />
            <label htmlFor="signUpPasswordConfirmation">Confirmation du mot de passe</label>
            <input
              type="password"
              name="signUpPasswordConfirmation"
              id="signUpPasswordConfirmation"
            />
            <button type="submit">Inscription</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signInUp;
