import React from "react";
import "./home.css";
import homeImg from "../../../assets/home-img.jpg";
import Product from "../product/Product";

const Home = () => {
  return (
    <div className="home-area">
      <div className="home-sec">
        <div
          style={{
            backgroundImage: `url(${homeImg})`,
          }}
          className="home-img-container"
        >
          {/* <img className="home-img" src={homeImg} alt="home" /> */}
          {/* <img
            className="home-img"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/TheTerminalList/3000x1200_Hero-Tall_NP._CB634276799_.jpg"
            alt="home"
          /> */}
        </div>
        <Product />
      </div>
    </div>
  );
};

export default Home;
