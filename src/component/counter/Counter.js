import React from "react";
import "./counter.css";
import { useSelector, useDispatch } from "react-redux";
import { counterSliceAction } from "../../store/index";

const Counter = () => {
  let dispatch = useDispatch();

  let counterVisibility = useSelector((state) => {
    return state.counterSliceReducer.isCounterVisible;
  });

  let counterValue = useSelector((state) => {
    return state.counterSliceReducer.counter;
  });

  let increment = () => {
    dispatch(counterSliceAction.increment());
  };

  let decrement = () => {
    dispatch(counterSliceAction.decrement());
  };

  let toggleCounter = () => {
    dispatch(counterSliceAction.toggleCounter());
  };

  let increase = () => {
    dispatch(counterSliceAction.increase({ value: 5 }));
  };

  return (
    <div className="counter-sec">
      <h1 className="text-center text-capitalize ">counter</h1>
      {counterVisibility && (
        <h3 className="text-center text-capitalize">{counterValue}</h3>
      )}
      <div className="text-center control-btn">
        <button className="btn btn-success" onClick={increment}>
          increment
        </button>
        <button
          onClick={() => {
            increase();
          }}
          className="btn btn-primary text-capitalize text-center"
        >
          increase by 5
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            decrement();
          }}
        >
          decrement
        </button>
      </div>
      {/* <div className="d-flex align-items-center justify-content-center mt-4">
        <button
          onClick={() => {
            increase();
          }}
          className="btn btn-secondary text-capitalize text-center"
        >
          increase by 5
        </button>
      </div> */}
      <div className="d-flex align-items-center justify-content-center mt-4">
        <button
          onClick={() => {
            toggleCounter();
          }}
          className="btn btn-secondary text-capitalize text-center"
        >
          toggle button
        </button>
      </div>
    </div>
  );
};

export default Counter;
