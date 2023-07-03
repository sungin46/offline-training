import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
const CountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count Number</h1>
      <p>Value : {count}</p>
      <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>Decrease</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default CountReducer;
