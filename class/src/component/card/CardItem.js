import React from "react";
import pic1 from "../../assets/card-img.jpg";
import { useState } from "react";

const CardItem = ({ title, price, rating, sale, setCartItems }) => {
  let [cartBtnVisibility, setCartBtnVisibility] = useState(true);

  let addItem = () => {
    setCartItems((prev) => {
      return prev + 1;
    });
    setCartBtnVisibility(false);
  };

  let removeItem = () => {
    setCartItems((prev) => {
      return prev - 1;
    });
    setCartBtnVisibility(true);
  };

  let marginTop = rating ? "70px" : "110px";
  return (
    <div className="col-xxl-3 col-xl-4 col-md-6  ">
      {" "}
      <div className="card-sec">
        <div className="card" style={{ width: "18rem", height: "450px" }}>
          <img src={pic1} class="card-img-top" alt="..." />
          {sale && (
            <strong
              style={{
                position: "absolute",
                backgroundColor: "black",
                color: "white",
                top: "10px",
                right: "10px",
                borderRadius: "5px",
                padding: "1px 5px",
                fontSize: "12px",
              }}
            >
              Sale
            </strong>
          )}

          <div className="card-body">
            <p
              style={{ fontWeight: "bold", fontSize: "25px" }}
              className="card-title text-center text-capitalize"
            >
              <strong>{title}</strong>
            </p>

            {rating && <p className="text-center">{rating}</p>}

            <p className="card-text text-center">{price}</p>
            <div
              className="text-center "
              style={{
                marginTop: `${marginTop}`,
              }}
            >
              <div className="d-flex align-items-center justify-content-center gap-2">
                {cartBtnVisibility && (
                  <button
                    onClick={(e) => {
                      addItem();
                    }}
                    className="btn btn-outline-dark text-capitalize"
                  >
                    Add to cart
                  </button>
                )}

                {!cartBtnVisibility && (
                  <button
                    className="btn btn-outline-dark text-capitalize"
                    onClick={(e) => {
                      removeItem();
                    }}
                  >
                    remove from cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
