import React from "react";
import "./emptyBasket.css";
const EmptyBasket = () => {
  return (
    <div className="empty-basket-area">
      <h1>Your Basket is Empty</h1>
      <p>
        Your Basket has no Item. Click "Add To Basket" of the products to Buy
        Products.
      </p>
    </div>
  );
};

export default EmptyBasket;
