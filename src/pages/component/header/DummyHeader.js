import "./dummyHeader.css";
import { useState } from "react";
import logo from "../../../assets/amazon-logo.jpg";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar } from "react-bootstrap";

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
        <div className="header-sec row py-2  ">
          {/* header logo   */}
          <div className="col-lg-1 col-md-2 col-sm-3 col-3 h-100 ">
            {/* <div className="col-lg-1 col-md-2 col-sm-2 col-2  header-logo-container"> */}
            <Link to="/">
              <img className="header-logo" src={logo} alt="amazon-logo" />
            </Link>
          </div>

          {/* header searchbar  */}
          <div className="col-lg-6 col-md-5 col-sm-5 col-6 ">
            {/* <div className="col-xxl-7 col-lg-6 col-md-5 col-sm-5 col-3 "> */}
            <div className="header-searchbar-container  ">
              <input type="text" className="header-searchbar " />
              <button className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>

          {/* header navigation link */}
          <div className="col-sm-4 col-3  m-0">
            {/* <div className="col-xxl-3 col-lg-4 col-md-5 col-sm-5 col-3  m-0"> */}
            <div className="row headerNavLink d-flex justify-content-end">
              {/* sign in  */}
              <div className="col-3 d-md-block d-none text-center">
                <Link to="/login" className="header-nav-link ">
                  <p className="m-0 p-0 header-little-text header-nav-1">
                    Hello,
                  </p>
                  <h6 className="header-nav-2">Sign In</h6>
                </Link>
              </div>

              {/* order  */}
              <div className="col-3  d-md-block d-none  text-center ">
                <Link to="/" className="header-nav-link ">
                  <p className="m-0 p-0 header-little-text header-nav-1">
                    Returns
                  </p>
                  <h6 className="header-nav-2"> Orders</h6>
                </Link>
              </div>

              {/* prime  */}
              <div className="col-3  d-md-block d-none  text-center">
                <Link to="/" className="header-nav-link">
                  <p className="m-0 p-0 header-little-text header-nav-1">
                    Your
                  </p>
                  <h6 className="header-nav-2">Prime</h6>
                </Link>
              </div>

              {/* cart basket  */}
              <div className="col-md-3 col-11 text-center d-flex align-items-center justify-content-center gap-1">
                <Link
                  to="/checkout"
                  className="header-nav-link d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="fa-solid fa-basket-shopping fs-3 header-nav-1 text-white"></i>
                  <h6 className="m-0 header-nav-2">{basket.length}</h6>
                </Link>
                <button
                  class="navbar-toggler text-white ps-2 d-md-none d-block col-3"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <i class="fa-solid fa-bars fs-3"></i>
                </button>

                {/* offcanvas  */}
                <div
                  style={{ width: "50%" }}
                  class="offcanvas offcanvas-start text-dark bg-dark    "
                  tabindex="-1"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                      {/* Offcanvas */}
                    </h5>

                    <i
                      type="button"
                      class="fa-solid fa-x text-white bg-dark"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></i>
                  </div>
                  <div class="offcanvas-body bg-dark">
                    <div>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/login"
                        className=""
                      >
                        <p className="m-0 p-0 ">Hello,</p>
                        <h3 className="">Sign In</h3>
                      </Link>
                    </div>
                    <div
                      style={{
                        textDecoration: "none",
                        color: "white",
                        marginTop: "20px",
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "white",
                        }}
                        to="/"
                        className=""
                      >
                        <p className="m-0 p-0 ">Returns</p>
                        <h3 className="m-0 p-0"> Orders</h3>
                      </Link>
                    </div>

                    <div
                      style={{
                        textDecoration: "none",
                        color: "white",
                        marginTop: "20px",
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "white",
                        }}
                        to="/"
                        className=""
                      >
                        <p className="m-0 p-0 ">Your</p>
                        <h3 className="m-0">Prime</h3>
                      </Link>
                    </div>
                  </div>
                </div>
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
