import React from "react";
import "./login.css";
import pic from "../../../assets/amazon-login-logo.png";
const Login = () => {
  return (
    <div className="login-area">
      <div className="login-sec">
        {/* logo  */}
        <img src={pic} alt="logo" className="login-logo" />

        {/* login form  */}
        <div className="login-form">
          <h3>Sign in</h3>

          <div className="pt-2">
            <strong>E-mail</strong>
            <br />
            <input className="login-inp pt-1 mt-1" type="email" />
          </div>
          <div className="pt-2">
            <strong>Password</strong>
            <br />
            <input className="login-inp pt-1 mt-1" type="email" />
          </div>

          <div className="mt-4">
            <button className="login-btn py-1">Sign in</button>
          </div>

          <p className="mb-0 mt-2 login-para">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>

          <div className="mt-4">
            <button className="signup-btn py-1">Create your account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
