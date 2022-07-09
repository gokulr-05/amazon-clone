import React from "react";
import "./header.css";

const Header = ({ cartItems }) => {
  return (
    <div className="bg-light">
      <div className="header-sec ">
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#1">
              Start Bootstrap
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#1">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#1">
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#1"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#1">
                        All products
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a class="dropdown-item" href="#1">
                        Popular Items
                      </a>
                    </li>
                    <li></li>
                    <li>
                      <a class="dropdown-item" href="#1">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <button class="btn btn-outline-dark" type="submit">
                <div className="cart-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <p className="m-0"> Cart</p>
                  <span class="badge bg-dark">{cartItems}</span>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
