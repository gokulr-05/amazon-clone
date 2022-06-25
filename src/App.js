import React from "react";
import img1 from "./asset/beast.jpg";
import img2 from "./asset/mersal.jpg";
import img3 from "./asset/sarkar.jpg";
import Item from "./Item";

const App = () => {
  let names = [
    { img: img1, title: "beast" },
    { img: img2, title: "mersal" },
    { img: img3, title: "sarkar" },
  ];
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div>
        {names.map((val, index) => {
          return <Item key={index} img={val.img} title={val.title} />;
        })}
      </div>
    </div>
  );
};

export default App;
