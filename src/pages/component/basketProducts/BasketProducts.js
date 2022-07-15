import React from "react";
import "./basketProducts.css";
import { useSelector } from "react-redux";
import BasketProductItem from "../basketProductItem/BasketProductItem";
import shortid from "shortid";
// import shortid from "shortid";

const BasketProducts = () => {
  let basket = useSelector((state) => {
    return state.productSliceReducer.basket;
  });

  let basketTotal = basket.reduce((total, num) => {
    return parseInt(total) + parseInt(num.price);
  }, 0);

  return (
    <div className="basket-products-area">
      <div className="row w-100">
        <div className="col-lg-8 col-sm-12 col-12">
          <h2>Your Shopping Basket</h2>
          <div className="basket-products-container pt-3">
            {basket.map((val, ind, arr) => {
              return (
                <BasketProductItem
                  key={shortid.generate()}
                  id={shortid.generate()}
                  title={val.title}
                  ratings={val.ratings}
                  price={val.price}
                  pic={val.pic}
                  ind={ind}
                />
              );
            })}
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-10 mb-5 ">
          <div className="basket-subtotal p-3 mt-3">
            <div className="text-capitalize d-flex align-items-center justify-content-start gap-3">
              <strong>Total Items: </strong>
              <p className="m-0">{basket.length}</p>
            </div>
            <div className="d-flex align-items-center justify-content-start gap-3">
              <strong>Total Amount: </strong>
              <p className="m-0">${basketTotal}</p>
            </div>
            <div className="text-center py-3">
              <button className="text-capitalize p-1 checkout-btn">
                proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketProducts;
