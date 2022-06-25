import React from "react";
import "./card.css";
import pic1 from "../../assets/card-img.jpg";
import { useState } from "react";
import CardItem from "./CardItem";

const Card = ({ setCartItems }) => {
  let arr = [
    { title: "Fancy Product", price: <p>$40.00-$80.00</p> },
    {
      title: "Special Item",
      price: (
        <p>
          <span className="text-muted">
            <s>$20.00</s>
          </span>
          <span> $18.00</span>
        </p>
      ),
      rating: <p>⭐⭐⭐⭐⭐</p>,
      sale: true,
    },
    {
      title: "Sale Item",
      price: (
        <p>
          <span className="text-muted">
            <s>$50.00</s>
          </span>
          <span> $25.00</span>
        </p>
      ),
      sale: true,
    },
    {
      title: "Popular Item",
      rating: <p>⭐⭐⭐⭐⭐</p>,
      price: (
        <p>
          <span>$40.00</span>
        </p>
      ),
    },
    {
      title: "Sale Item",
      price: (
        <p>
          <span className="text-muted">
            <s>$50.00</s>
          </span>
          <span> $25.00</span>
        </p>
      ),
      sale: true,
    },
    {
      title: "Fancy Product",
      price: <p>$120.00-$280.00</p>,
    },

    {
      title: "Special Item",
      rating: <p>⭐⭐⭐⭐⭐</p>,
      price: (
        <p>
          <span className="text-muted">
            <s>$20.00</s>
          </span>
          <span> $18.00</span>
        </p>
      ),
      sale: true,
    },
    {
      title: "Popular Item",
      rating: <p>⭐⭐⭐⭐⭐</p>,
      price: <p>$40.00</p>,
    },
  ];
  let [titles, setTitles] = useState(arr);

  return (
    <div className="container">
      <div className="row">
        {titles.map((val) => {
          return (
            <CardItem
              title={val.title}
              rating={val.rating}
              price={val.price}
              sale={val.sale}
              setCartItems={setCartItems}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Card;
