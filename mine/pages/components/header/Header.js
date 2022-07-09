import React from "react";
import "./header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  // pl data
  let plData = useSelector((state, action) => {
    return state.plSliceReducer.plData;
  });

  //crest images
  let crestImages = plData.teams.map((value, index, arr) => {
    let http = "https://";
    let web = http.concat(value.directory.website);
    return { image: value.images.crest, website: web };
  });

  return (
    <div className="header-area">
      <div className="header-sec">
        {/* header 1  */}
        <div className="header-1 py-3">
          <div className="header-1-subsec">
            <div className="crest-text-sec">
              <p className="m-0 text-capitalize">Club Sites:</p>
            </div>

            {/* crest image container  */}
            <div className="crest-img-sec ">
              {crestImages.map((val, ind) => {
                return (
                  <div key={ind} className="crest-img-container">
                    <a href={val.website} target="_blank">
                      <img className="crest-img" src={val.image} alt="crest" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* header 2  */}
        <div className="header-2">
          {/* logo section  */}
          <div className="header-2-logo-sec">
            <div className="logo-container">
              <Link to="/">
                <img className="header-logo" src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="header-2-text-sec">
            <div className="premierLeague-sec">
              <h1 className="m-0">Premier League</h1>
              <p className="m-0">No Room For Racism</p>
            </div>
            <div className="">
              <Link to="/" className="link-dec">
                <strong>Home</strong>
              </Link>
              <Link to="/" className="link-dec">
                <strong className="ps-5">Fixtures</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
