import React, { useState } from "react";

const ToggleTheme = () => {
  const [toggleMode, setToggleMode] = useState(!false);
  const toggle = () => {
    setToggleMode(!toggleMode);
  };
  return (
    <div>
      <p>Current Theme : {toggleMode ? "Light" : "Dark"}</p>
      <button onClick={toggle}>Toggle Theme</button>
    </div>
  );
};

export default ToggleTheme;
