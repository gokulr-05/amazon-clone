import React from "react";
import "./productItem.css";
import { useDispatch } from "react-redux";
import { productSliceAction } from "../../../store/productSlice/productSlice";

const ProductItem = ({ id, title, price, ratings, pic }) => {
  let dispatch = useDispatch();

  let addToCartHandler = (id) => {
    dispatch(
      productSliceAction.AddToBasket({
        item: {
          id: id,
          title: title,
          price: price,
          ratings: ratings,
          pic: pic,
        },
      })
    );
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12  product-col">
      <div className="product-item-area ">
        <div className="product-item-sec">
          <div>
            <p className="title-text text-capitalize">{title}</p>
            <small>$</small>
            <strong>{price}</strong>
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
          <button
            onClick={() => {
              addToCartHandler(id);
            }}
            className="cart-btn"
          >
            Add To Basket
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
