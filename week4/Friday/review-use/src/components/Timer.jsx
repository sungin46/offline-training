import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      console.log("리턴");
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <p>{seconds} 초</p>
    </div>
  );
};

export default Timer;
