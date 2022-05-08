import React from "react";
import "./SignInUp.scss";

const signInUp = () => {
  return (
    <div className="signInUpContent">
      <div className="signInArea">
        <h2>Sign In</h2>
        <div className="form">
          <form>
            <label htmlFor="signInMail">Mail</label>
            <input type="email" name="signInMail" id="signInMail" />
            <label htmlFor="signInPassword">Password</label>
            <input type="password" name="signInPassword" id="signInPassword" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <hr />
      <div className="signUpArea">
        <h2>Sign Up</h2>
        <div className="form">
          <form>
            <label htmlFor="signUpMail">Mail</label>
            <input type="email" name="signUpMail" id="signUpMail" />
            <label htmlFor="signUpPassword">Password</label>
            <input type="password" name="signInPassword" id="signUpPassword" />
            <label htmlFor="signUpPasswordConfirmation">Confirm Password</label>
            <input
              type="password"
              name="signUpPasswordConfirmation"
              id="signUpPasswordConfirmation"
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signInUp;
