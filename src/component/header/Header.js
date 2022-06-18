import "./header.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSliceAction } from "../../store/index";

const Header = () => {
  let dispatch = useDispatch();
  let isAuthValue = useSelector((state) => {
    return state.authSliceReducer.isAuthenticated;
  });

  let logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authSliceAction.logout());
  };

  return (
    <div className="header-area bg-primary">
      <div className="header-sec py-2">
        <div className="d-flex align-items-center">
          <h1 className="m-0 p-0">Redux Auth</h1>
        </div>
        {isAuthValue && (
          <div className="right-header">
            <p className="m-0">
              <b>My Product</b>
            </p>
            <p className="m-0">
              <b>My Sales</b>
            </p>
            <button onClick={logoutHandler} className="btn btn-warning">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
