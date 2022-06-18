import React from "react";
import "./auth.css";
import { useDispatch } from "react-redux";
import { authSliceAction } from "../../store/authSlice";

const Auth = () => {
  let dispatch = useDispatch();
  // let isAuthValue = useSelector((state) => {
  //   return state.authSliceReducer.isAuthenticated;
  // });

  let loginHandler = (e) => {
    e.preventDefault();
    dispatch(authSliceAction.login());
  };
  return (
    <div className="auth-area ">
      <div className="auth-sec white-color auth">
        <div className="auth-data-box">
          <div>
            <p className="text-uppercase text-center ">email</p>
            <input type="text" className="inp-box" />
          </div>
        </div>
        <div className="auth-data-box">
          <div>
            <p className="text-uppercase text-center">password</p>
            <input type="text" className="inp-box" />
          </div>
        </div>
        <div className="auth-data-box d-flex align-items-center justify-content-center">
          <button
            onClick={loginHandler}
            className="btn btn-success text-center"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
