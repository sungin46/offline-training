import React, { useReducer } from "react";

const initialState = {
  theme: "Light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CASE":
      return {
        ...state,
        theme: state.theme === "Light" ? "Dark" : "Light",
      };
    default:
      return state;
  }
};

const ThemeReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Theme : {state.theme}</p>
      <button onClick={() => dispatch({ type: "TOGGLE_CASE" })}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeReducer;
