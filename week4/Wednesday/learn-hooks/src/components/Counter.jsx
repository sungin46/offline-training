import React, { useState } from "react";

const Counter = () => {
  const onClick = () => {
    setCounter(counter + 1);
  };
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>카운트 : {counter}</p>
      <button onClick={onClick}>증가</button>
    </div>
  );
};

export default Counter;
