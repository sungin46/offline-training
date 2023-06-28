import React from "react";
import useCounter from "../hooks/CountHook";

const UseCount = () => {
  const { count, increase, decrease } = useCounter(100);
  return (
    <div>
      <p>카운트 : {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default UseCount;
