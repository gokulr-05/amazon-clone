import React from "react";
import "./checkout.css";
import { useSelector } from "react-redux";
import BasketProducts from "../basketProducts/BasketProducts";
import EmptyBasket from "../emptyBasket/EmptyBasket";

const Checkout = () => {
  let basket = useSelector((state) => {
    return state.productSliceReducer.basket;
  });

  return (
    <div className="checkout-area">
      <div className="checkout-sec">
        {basket.length > 0 ? <BasketProducts /> : <EmptyBasket />}
      </div>
    </div>
  );
};

export default Checkout;
