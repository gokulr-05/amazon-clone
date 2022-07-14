import "./header.css";
import React from "react";
import logo from "../../../assets/amazon-logo.jpg";

const Header = () => {
  return (
    <nav className="header-area">
      {/*header row  */}
      <div className="header-sec row py-2">
        {/* header logo   */}
        <div className="col-lg-2 col-md-2 col-sm-2 col-2  header-logo-container">
          <img className="header-logo" src={logo} alt="amazon-logo" />
        </div>

        {/* header searchbar  */}
        <div className="col-xxl-7 col-lg-6 col-md-5 col-sm-5 col-5 d-flex align-items-center">
          <div className="header-searchbar-container   ">
            <input type="text" className="header-searchbar ps-2 " />
            <button className="search-btn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        {/* header navigation link */}
        <div className="col-xxl-3 col-lg-4 col-md-5 col-sm-5 col-5  m-0">
          <div className="row headerNavLink">
            {/* sign in  */}
            <div className="col-3  text-center">
              <p className="m-0 p-0 header-little-text">Hello,</p>
              <h6>Sign In</h6>
            </div>

            {/* order  */}
            <div className="col-3  text-center">
              <p className="m-0 p-0 header-little-text">Returns</p>
              <h6>& Orders</h6>
            </div>

            {/* prime  */}
            <div className="col-3  text-center">
              <p className="m-0 p-0 header-little-text">Your</p>
              <h6>Prime</h6>
            </div>

            {/* cart basket  */}
            <div className="col-3 text-center d-flex align-items-center justify-content-center gap-2">
              <i class="fa-solid fa-basket-shopping fs-3"></i>
              <h6 className="m-0">0</h6>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
