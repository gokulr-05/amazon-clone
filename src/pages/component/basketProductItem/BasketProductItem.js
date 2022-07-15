import React from "react";
import "./basketProductItem.css";
import { productSliceAction } from "../../../store/productSlice/productSlice";
import { useDispatch } from "react-redux";

const BasketProductItem = ({ id, title, price, ratings, pic, ind }) => {
  let dispatch = useDispatch();
  let removeHandler = (ind) => {
    dispatch(productSliceAction.RemoveFromBasket({ ind: ind }));
  };

  return (
    <div className="basketProductItem-area my-4">
      <div className="row">
        <div className="col-lg-3 col-sm-6 col-6">
          <div className="product-item-img-container">
            <img className="basket-pic" src={pic} alt="basket" />
          </div>
        </div>
        <div className="col-lg-9 col-sm-6 col-6">
          <div className="px-2">
            <h6 className="text-capitalize">{title}</h6>
            <div>
              <small>$</small>
              <strong>{price}</strong>
            </div>
            <div>
              {Array(ratings)
                .fill()
                .map(() => {
                  return <>⭐</>;
                })}
            </div>
            <div className="pt-4">
              <button
                className="remove-basket"
                onClick={() => {
                  removeHandler(ind);
                }}
              >
                Remove from basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketProductItem;
