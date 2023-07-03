import React, { useState } from "react";
import Timer from "./Timer";

const ToggleTimer = () => {
  //이 밑을 복붙할 필요 없이 Timer를 불러오면 되는 것이었다
  //   const [seconds, setSeconds] = useState(0);

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setSeconds((prev) => prev + 1);
  //     }, 1000);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);

  const [isHide, setIsHide] = useState(false);
  const toggleBtn = () => {
    setIsHide(!isHide);
  };

  return (
    <div>
      {/* 나는 삼항연산자를 써서 했었는데 */}
      {/* {isHide ? "" : <p>{seconds} 초</p>} */}

      {/* 여기는 조건문으로 불러오고 Timer컴포넌트 불러오고 끝내버렸네 */}
      {!isHide && <Timer />}
      <button onClick={toggleBtn}>
        {isHide ? "Show Timer" : "Hide Timer"}
      </button>
    </div>
  );
};

export default ToggleTimer;
