import { useState } from "react";

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return { count, increase, decrease };
};

export default useCounter;
