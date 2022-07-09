import React from "react";
import Header from "../components/header/Header";
import "./home.css";
import Fixtures from "../components/fixtures/Fixtures";
import Standings from "../components/standings/Standings";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="body-container">
        <div className="row">
          <div className="col-xxl-6 col-12 ">
            <Fixtures />
          </div>
          <div className="col-xxl-6 col-12">
            <div className="">
              <Standings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
