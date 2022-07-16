import "./header.css";
import { useState } from "react";
import logo from "../../../assets/amazon-logo.jpg";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let basket = useSelector((state) => {
    return state.productSliceReducer.basket;
  });
  return (
    <div>
      <nav className="header-area">
        {/*header row  */}
        <div className="header-sec row py-2">
          {/* header logo   */}

          <div className="col-lg-2 col-md-2 col-sm-2 col-2  header-logo-container">
            <Link to="/">
              <img className="header-logo" src={logo} alt="amazon-logo" />
            </Link>
          </div>

          {/* header searchbar  */}
          <div className="col-xxl-7 col-lg-6 col-md-5 col-sm-5 col-4 d-flex align-items-center">
            <div className="header-searchbar-container   ">
              <input type="text" className="header-searchbar ps-2 " />
              <button className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>

          {/* header navigation link */}
          <div className="col-xxl-3 col-lg-4 col-md-5 col-sm-5 col-5  m-0">
            <div className="row headerNavLink">
              {/* sign in  */}
              <div className="col-3 d-sm-block d-none text-center">
                <Link to="/login" className="header-nav-link ">
                  <p className="m-0 p-0 header-little-text header-nav-1">
                    Hello,
                  </p>
                  <h6 className="header-nav-2">Sign In</h6>
                </Link>
              </div>

              {/* order  */}
              <div className="col-3  d-sm-block d-none  text-center ">
                <Link to="/" className="header-nav-link ">
                  <p className="m-0 p-0 header-little-text header-nav-1">
                    Returns
                  </p>
                  <h6 className="header-nav-2">& Orders</h6>
                </Link>
              </div>

              {/* prime  */}
              <div className="col-3  d-sm-block d-none  text-center">
                <Link to="/" className="header-nav-link">
                  <p className="m-0 p-0 header-little-text header-nav-1">
                    Your
                  </p>
                  <h6 className="header-nav-2">Prime</h6>
                </Link>
              </div>

              {/* cart basket  */}
              <div className="col-3 text-center d-flex align-items-center">
                <Link
                  to="/checkout"
                  className="header-nav-link d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="fa-solid fa-basket-shopping fs-3 header-nav-1 text-white"></i>
                  <h6 className="m-0 header-nav-2">{basket.length}</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
