import React, { useState } from "react";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };
  return <button onClick={handleClick}> {isOn ? "켜짐" : "꺼짐"}</button>;
};

export const Practice04 = () => {
  return <Switch />;
};
