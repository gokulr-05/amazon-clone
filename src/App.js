import React from "react";
import Header from "./component/header/Header";
import Poster from "./component/poster/Poster";
import Card from "./component/card/Card";
import Footer from "./component/footer/Footer";

import { useState } from "react";

const App = () => {
  let [cartItems, setCartItems] = useState(0);

  return (
    <div>
      <Header cartItems={cartItems} />
      <Poster />
      <Card setCartItems={setCartItems} />
      <Footer />
    </div>
  );
};

export default App;
