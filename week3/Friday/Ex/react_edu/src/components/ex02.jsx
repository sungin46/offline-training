import { useState } from "react";

const Practice02 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Counter : {counter}
      <button onClick={() => setCounter(counter + 1)}>증가</button>
      <button onClick={() => setCounter(counter - 1)}>감소</button>
    </div>
  );
};
export default Practice02;
