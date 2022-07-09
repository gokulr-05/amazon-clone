import React from "react";
import "./header.css";
import data from "../../data/data.json";
import Icon from "../../assets/images/logo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

console.log(data);
const Header = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <div
          style={{
            background: "white",
            border: "1px solid",
            width: 120,
            height: 120,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Icon}
            alt=""
            style={{ width: 100, height: 100, position: "absolute" }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <p>club site:</p>
          {data.teams.map((item, index) => (
            <img
              key={item.id}
              style={{ width: 50, height: 50, margin: "0 10px" }}
              src={item.images.crest}
              alt=""
            />
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#3D185C",
          color: "white",
          alignItems: "center",
          padding: "0 10px",
          marginTop: -70,
        }}
      >
        <h2 style={{ marginLeft: 130 }}>premier league</h2>
        <p>No room for racism</p>
      </div>
    </>
  );
};

export default Header;
