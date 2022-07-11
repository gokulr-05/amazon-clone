import React from "react";
import ProductDetails from "./components/productDetails/ProductDetails";

import { useState } from "react";
import ImgModal from "./components/productDetails/ImgModal/ImgModal";

const App = () => {
  let [customerModal, setCustomerModal] = useState(false);
  let [customerImgIndex, setCustomerImgIndex] = useState(0);

  let openCustomerModal = (index) => {
    setCustomerImgIndex(index);
    console.log("Open modal");
    setCustomerModal(true);
  };
  let closeCustomerModal = () => {
    setCustomerModal(false);
  };
  return (
    <div>
      <ProductDetails openCustomerModal={openCustomerModal} />
      <ImgModal
        customerImgIndex={customerImgIndex}
        openCustomerModal={openCustomerModal}
        customerModal={customerModal}
        closeCustomerModal={closeCustomerModal}
      />
    </div>
  );
};

export default App;
