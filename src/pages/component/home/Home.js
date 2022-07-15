import React from "react";
import "./home.css";
import homeImg from "../../../assets/home-img.jpg";
import Product from "../product/Product";

const Home = () => {
  return (
    <div className="home-area">
      <div className="home-sec">
        <div className="home-img-container">
          <img className="home-img" src={homeImg} alt="home" />
        </div>
        <Product />
      </div>
    </div>
  );
};

export default Home;
