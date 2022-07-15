import React from "react";
import "./productItem.css";

const ProductItem = ({ title, price, ratings, pic }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12  product-col">
      <div className="product-item-area ">
        <div className="product-item-sec">
          <div>
            <p className="title-text text-capitalize">{title}</p>
            <strong>${price}</strong>
            <br />
            {Array(ratings)
              .fill()
              .map(() => {
                return <span>⭐</span>;
              })}
          </div>
          <div className="product-pic-container">
            <img className="product-pic" src={pic} alt="product" />
          </div>
          {/* <div> */}
          <button className="cart-btn">Add To Basket</button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
