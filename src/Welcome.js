import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div style={{ textAlign: "end", backgroundColor: "black" }}>
        <Link
          to="/movie"
          style={{
            textDecoration: "none",
            margin: "100px",
            color: "white",
          }}
        >
          Movie
        </Link>
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "black",
          marginTop: "250px",
        }}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>welcome</h1>
      </div>
    </>
  );
};

export default Welcome;
