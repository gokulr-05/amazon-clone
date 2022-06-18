import React from "react";
import "./counter.css";
import { useSelector, useDispatch } from "react-redux";
import { counterSliceAction } from "../store/index";
import { counterSlice } from "../store/index";

const Counter = () => {
  // dispatch action function
  let dispatch = useDispatch();

  // counter in redux state
  let counter = useSelector((state) => {
    return state.counter;
  });

  //   function to increment counter value
  let inc = () => {
    // dispatch({ type: "INC" });
    dispatch(counterSliceAction.increment());
  };

  //   function to decrement counter value
  let dec = () => {
    // dispatch({ type: "DEC" });
    dispatch(counterSliceAction.decrement());
  };

  return (
    <div className="counter-sec bg-primary">
      <h1 className="text-center text-capitalize ">counter</h1>
      <h3 className="text-center text-capitalize">{counter}</h3>
      <div className="text-center control-btn">
        <button
          className="btn btn-success"
          onClick={(e) => {
            inc();
          }}
        >
          increment
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            dec();
          }}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
