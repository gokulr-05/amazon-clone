import React from "react";
import Header from "./component/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/component/home/Home";
import Login from "./component/login/Login";
import Checkout from "./component/checkout/Checkout";

const Amazon = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Amazon;
